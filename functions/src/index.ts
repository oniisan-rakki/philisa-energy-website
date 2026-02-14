/**
 * Import function triggers from their respective submodules:
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { setGlobalOptions } from "firebase-functions/v2/options";
import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as nodemailer from "nodemailer";

// Set global options (Cost control settings)
setGlobalOptions({ maxInstances: 10 });

// --- CONFIGURATION ---
// These are loaded from your .env file in the functions folder
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

// --- EMAIL TRANSPORTER ---
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// --- MAIN FUNCTION ---
export const sendContactMessage = onRequest({ cors: true }, async (req, res) => {
  try {
    // 1. Extract Data
    const { name, email, message, honeypot } = req.body;

    // 2. Bot Protection (Honeypot Check)
    if (honeypot) {
      logger.info("Bot detected (Honeypot filled).");
      // Send a fake success response to fool the bot
      res.status(200).send({ success: true });
      return; 
    }

    // 3. Email to Admin (Philisa Energy)
    const adminMailOptions = {
      from: `"Philisa Energy Website" <${EMAIL_USER}>`,
      to: "info@philisaenergy.com",
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // 4. Confirmation Email to User
    const userMailOptions = {
      from: `"Philisa Energy" <${EMAIL_USER}>`,
      to: email,
      subject: "We received your message - Philisa Energy",
      text: `Hi ${name},\n\nThank you for reaching out to Philisa Energy. We have received your message and will get back to you shortly.\n\nBest regards,\nThe Philisa Energy Team`,
    };

    // 5. Send Emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    res.status(200).json({ success: true, message: "Emails sent" });

  } catch (error: any) {
    logger.error("Error sending email:", error);
    res.status(500).json({ error: error.message });
  }
});