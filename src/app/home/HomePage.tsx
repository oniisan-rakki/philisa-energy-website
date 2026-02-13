"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Carousel } from "../components/Carousel";
// IMPORTS FIXED:
import { db } from "../lib/firebase"; 
import { collection, addDoc } from "firebase/firestore"; 

import { homeHeroSection } from "../data/homeHeroSection";
import { ourStoryData } from "../data/ourStoryData";
import { ourMissionData } from "../data/ourMissionData";
import { ourSolutionsData } from "../data/ourSolutionsData";
import { industriesData } from "../data/industriesData";
import { technologyData } from "../data/technologyData";
import { sustainabilityData } from "../data/sustainabilityData";
import { joinTheRevolutionData } from "../data/joinTheRevolution";
import { newsData } from "../data/newsData";
import { contactData } from "../data/contactData";

export const HomePage = () =>  {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Anti-spam check

    setStatus('submitting');
    try {
        await addDoc(collection(db, "mail"), {
            to: ["info@philisaenergy.com"], 
            message: {
                subject: `New Inquiry from ${formData.firstName} ${formData.lastName}`,
                text: formData.message,
                html: `<p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p><p><strong>Email:</strong> ${formData.email}</p><p><strong>Message:</strong> ${formData.message}</p>`
            },
            replyTo: formData.email 
        });
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '', honeypot: '' });
    } catch (error) {
        console.error("Error submitting form: ", error);
        setStatus('error');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full pt-[100px] md:pt-[150px]">
      
      {/* 1. HERO SECTION */}
      <section id="home" className="relative w-full h-[600px] md:h-[500px] flex items-center bg-zinc-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <Image src={homeHeroSection.img} alt="Hero Background" fill className="object-cover" priority />
             <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
        <div className="relative z-20 container mx-auto px-5 md:px-0 h-full flex items-center">
            <div className="w-full md:w-[875px] h-auto md:h-[225px] bg-white/90 backdrop-blur-sm px-8 md:px-12 py-8 flex flex-col justify-center items-start rounded-sm shadow-sm">
                <h1 className="text-black font-['Inter'] text-[24px] md:text-[32px] font-black leading-normal mb-2">{homeHeroSection.header}</h1>
                <p className="text-black font-['Inter'] text-[13px] font-normal leading-normal mb-7 max-w-2xl">{homeHeroSection.description}</p>
                <Link href="#our-story">
                    <button className="px-10 py-4 bg-black text-white text-xs font-semibold rounded hover:bg-[#FF9C1A] hover:text-black transition-colors cursor-pointer">{homeHeroSection.button}</button>
                </Link>
            </div>
        </div>
        {/* Scroll To Discover (Functional Link) */}
        <Link href="#our-story" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-30">
             <span className="text-white font-['Inter'] text-[11px] font-black leading-normal uppercase tracking-widest">SCROLL TO DISCOVER</span>
             <div className="w-[20px] h-[20px] bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-3 h-3 animate-bounce"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
             </div>
        </Link>
      </section>

      {/* 2. OUR STORY */}
      <section id="our-story" className="w-full py-10 md:py-15 bg-white">
        <div className="container mx-auto px-5 md:px-0 max-w-7xl">
          <h4 className="w-fit mb-2 text-[14px] font-black uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">{ourStoryData.subtitle}</h4>
          <h2 className="text-black font-black text-[24px] md:text-[32px] mb-7">{ourStoryData.header}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-10">
            <p className="text-black text-[14px] font-light leading-[28px]">{ourStoryData.paragraphOne}</p>
            <p className="text-black text-[14px] font-light leading-[28px]">{ourStoryData.paragraphTwo}</p>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative aspect-video w-full rounded-sm overflow-hidden bg-gray-100"><Image src={ourStoryData.imageOne} alt="Our Story 1" fill className="object-cover" /></div>
            <div className="relative aspect-video w-full rounded-sm overflow-hidden bg-gray-100"><Image src={ourStoryData.imageTwo} alt="Our Story 2" fill className="object-cover" /></div>
          </div>
        </div>
      </section>
      
      {/* 3. OUR MISSION */}
      <section id="our-mission" className="w-full py-10 md:py-15 bg-white">
        <div className="container mx-auto px-5 md:px-0 max-w-7xl">
           <h4 className="w-fit mb-2 text-[14px] font-black uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">{ourMissionData.subtitle}</h4>
          <h2 className="text-black font-black text-[24px] md:text-[32px] mb-10">{ourMissionData.header}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-[25px] w-full items-stretch">
            {ourMissionData.items.map((item, index) => (
              <div key={index} className="flex flex-col p-8 hover:shadow-lg transition-shadow min-h-[350px]" style={{background: 'linear-gradient(#FFF, #FFF) padding-box, linear-gradient(90deg, #FF9C1A, #0F3460, #020E22) border-box', border: '1px solid transparent'}}>
                 <div className="h-12 flex items-center justify-start"><div className="w-12 h-12 flex-shrink-0 relative"><img src={item.img} alt={item.title} className="w-full h-full object-contain" /></div></div>
                 <div className="mt-7 min-h-[56px] flex items-start"><h3 className="text-black font-['Inter'] text-[21px] font-black leading-tight text-left">{item.title}</h3></div>
                 <div className="mt-5"><p className="text-black font-['Inter'] text-[14px] font-light leading-[28px] text-left">{item.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS */}
      {ourSolutionsData.map((solution, idx) => (
        <section key={idx} id="solutions" className="w-full py-10 md:py-15 bg-white">
           <div className="container mx-auto px-5 md:px-0 max-w-7xl">
            <h4 className="w-fit mb-2 text-[14px] font-black uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">{solution.subtitle}</h4>
            <h2 className="text-black font-black text-[24px] md:text-[32px] mb-7">{solution.header}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
                 <p className="text-black text-[14px] font-light leading-[28px]">{solution.paragraphOne}</p>
                 <p className="text-black text-[14px] font-light leading-[28px]">{solution.paragraphTwo}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                 <div className="relative w-full h-64 md:h-80 rounded-sm overflow-hidden bg-gray-100"><Image src={solution.imageOne} alt="Solutions 1" fill className="object-cover" /></div>
                 <div className="relative w-full h-64 md:h-80 rounded-sm overflow-hidden bg-gray-100"><Image src={solution.imageTwo} alt="Solutions 2" fill className="object-cover" /></div>
            </div>
           </div>
        </section>
      ))}

      {/* 5. INDUSTRIES */}
      <section id="industries" className="w-full py-10 md:py-15 bg-white overflow-hidden">
        <div className="container mx-auto px-5 md:px-0 max-w-7xl">
           <h4 className="w-fit mb-2 text-[14px] font-black uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">{industriesData.subtitle}</h4>
           <h2 className="text-black font-black text-[24px] md:text-[32px] mb-6">{industriesData.header}</h2>
           <Carousel items={industriesData.items} renderItem={(news) => (
                <div className="flex flex-col w-[85vw] md:w-[350px]">
                    <div className="w-full h-[250px] bg-gray-200 flex-shrink-0 relative overflow-hidden"><Image src={news.img} alt={news.title} fill className="object-cover" /></div>
                    <div className="w-full flex-1 flex flex-col p-8 bg-white" style={{borderStyle: 'solid', borderWidth: '0px 1px 1px 1px', borderColor: 'transparent', background: `linear-gradient(#FFF, #FFF) padding-box, linear-gradient(90deg, #FF9C1A, #0F3460, #020E22) border-box`}}>
                        <h3 className="text-black font-['Inter'] text-[16px] font-black uppercase leading-normal mb-4">{news.title}</h3>
                        <p className="w-full text-black font-['Inter'] text-[14px] font-light leading-[28px]">{news.description}</p>
                    </div>
                </div>
            )} />
        </div>
      </section>

      {/* 6. TECHNOLOGY */}
      {technologyData.map((tech, idx) => (
      <section key={idx} id="technology" className="w-full py-10 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-0 max-w-7xl">
          <h4 className="w-fit mb-2 text-[14px] font-black uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">{tech.subtitle}</h4>
          <h2 className="text-black font-black text-[24px] md:text-[32px] mb-7">{tech.header}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-10">
             <p className="text-black text-[14px] font-light leading-[28px]">{tech.paragraphOne}</p>
             <p className="text-black text-[14px] font-light leading-[28px]">{tech.paragraphTwo}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
             <div className="relative w-full h-64 rounded-sm overflow-hidden bg-gray-100"><Image src={tech.imageOne} alt="Tech 1" fill className="object-cover" /></div>
             <div className="relative w-full h-64 rounded-sm overflow-hidden bg-gray-100"><Image src={tech.imageTwo} alt="Tech 2" fill className="object-cover" /></div>
          </div>
        </div>
      </section>
      ))}

      {/* 7. SUSTAINABILITY */}
      <section id="sustainability" className="w-full py-10 md:py-15 bg-white">
         <div className="container mx-auto px-5 md:px-0 max-w-7xl">
           <h4 className="w-fit mb-2 text-[14px] font-black uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">{sustainabilityData.subtitle}</h4>
          <h2 className="text-black font-black text-[24px] md:text-[32px] mb-10">{sustainabilityData.header}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-[25px] w-full items-stretch">
            {sustainabilityData.items.map((item, index) => (
              <div key={index} className="flex flex-col p-8 hover:shadow-lg transition-shadow min-h-[350px]" style={{background: 'linear-gradient(#FFF, #FFF) padding-box, linear-gradient(90deg, #FF9C1A, #0F3460, #020E22) border-box', border: '1px solid transparent'}}>
                 <div className="h-12 flex items-center justify-start"><div className="w-12 h-12 flex-shrink-0 relative"><img src={item.img} alt={item.title} className="w-full h-full object-contain" /></div></div>
                 <div className="mt-7 min-h-[56px] flex items-start"><h3 className="text-black font-['Inter'] text-[21px] font-black leading-tight text-left">{item.title}</h3></div>
                 <div className="mt-0"><p className="text-black font-['Inter'] text-[14px] font-light leading-[28px] text-left">{item.description}</p></div>
              </div>
            ))}
          </div>
         </div>
      </section>

      {/* 8. JOIN THE REVOLUTION */}
      <section id="careers" className="w-full py-10 md:py-15 bg-white">
        <div className="container mx-auto px-5 md:px-0 max-w-7xl">
           <h4 className="w-fit mb-2 text-[14px] font-black uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">{joinTheRevolutionData.subtitle}</h4>
           <h2 className="text-black font-black text-[24px] md:text-[32px] mb-7">{joinTheRevolutionData.header}</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-10">
             <p className="text-black text-[14px] font-light leading-[28px]">{joinTheRevolutionData.paragraphOne}</p>
             <p className="text-black text-[14px] font-light leading-[28px]">{joinTheRevolutionData.paragraphTwo}</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
             <div className="relative w-full h-64 rounded-sm overflow-hidden bg-gray-100"><Image src={joinTheRevolutionData.imageOne} alt="Career 1" fill className="object-cover" /></div>
             <div className="relative w-full h-64 rounded-sm overflow-hidden bg-gray-100"><Image src={joinTheRevolutionData.imageTwo} alt="Career 2" fill className="object-cover" /></div>
           </div>
        </div>
      </section>

      {/* 9. NEWS */}
      <section id="news" className="w-full py-10 md:py-15 bg-white overflow-hidden">
        <div className="container mx-auto px-5 md:px-0 max-w-7xl">
           <h4 className="w-fit mb-2 text-[14px] font-black uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">{newsData.subtitle}</h4>
           <h2 className="text-black font-black text-[24px] md:text-[32px] mb-5">{newsData.header}</h2>
           <Carousel items={newsData.items} renderItem={(news) => (
                <div className="flex flex-col w-[85vw] md:w-[350px]">
                    <div className="w-full h-[250px] bg-gray-200 flex-shrink-0 relative overflow-hidden"><Image src={news.img} alt={news.title} fill className="object-cover" /></div>
                    <div className="w-full flex-1 flex flex-col p-8 bg-white" style={{borderStyle: 'solid', borderWidth: '0px 1px 1px 1px', borderColor: 'transparent', background: `linear-gradient(#FFF, #FFF) padding-box, linear-gradient(90deg, #FF9C1A, #0F3460, #020E22) border-box`}}>
                        <h3 className="text-black font-['Inter'] text-[16px] font-black uppercase leading-normal mb-4">{news.title}</h3>
                        <p className="w-full text-black font-['Inter'] text-[14px] font-light leading-[28px] mb-6">{news.description}</p>
                        <button className="bg-[#000000] text-white px-8 py-3 text-xs font-bold rounded self-start hover:bg-[#FF9C1A] transition-colors mt-auto cursor-pointer hover:text-black">{news.button}</button>
                    </div>
                </div>
             )} />
        </div>
      </section>

      {/* 10. CONTACT */}
      <section id="contact" className="w-full py-10 md:py-15 bg-white">
        <div className="container mx-auto px-5 md:px-0 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col justify-center">
                <h4 className="w-fit mb-2 text-[14px] font-black uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">{contactData.subtitle}</h4>
              <h2 className="text-black font-black text-[24px] md:text-[32px] mb-5">{contactData.header}</h2>
              <p className="text-black text-[14px] font-light leading-[28px] mb-10">{contactData.description}</p>
              <div className="space-y-8">
                <div className="flex items-start gap-6"><div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg></div><div><h4 className="font-bold text-lg text-black mb-1">Phone</h4><p className="text-black font-medium hover:underline hover:text-[#FF9C1A] cursor-pointer">{contactData.contactDetails.phoneNumber}</p></div></div>
                <div className="flex items-start gap-6"><div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg></div><div><h4 className="font-bold text-lg text-black mb-1">Email</h4><p className="text-black font-medium hover:underline hover:text-[#FF9C1A] cursor-pointer">{contactData.contactDetails.email}</p></div></div>
              </div>
            </div>
            
            <div className="p-8 md:p-10 shadow-xl rounded-lg" style={{border: '1px solid transparent', background: `linear-gradient(#FFF, #FFF) padding-box, linear-gradient(90deg, #FF9C1A, #0F3460, #020E22) border-box`}}>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="hidden"><input type="text" name="honeypot" value={formData.honeypot} onChange={(e) => setFormData({...formData, honeypot: e.target.value})}/></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-3"><label className="text-sm font-semibold text-black ml-1">First Name</label><input required type="text" placeholder={contactData.contactForm.firstNamePlaceholder} value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full p-3 bg-white rounded-lg border border-black text-black focus:outline-none focus:border-black placeholder-black focus:ring-1 focus:ring-black transition-all" /></div>
                    <div className="flex flex-col gap-3"><label className="text-sm font-semibold text-black ml-1">Last Name</label><input required type="text" placeholder={contactData.contactForm.lastNamePlaceholder} value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full p-3 bg-white border rounded-lg border-black text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black placeholder-black transition-all" /></div>
                </div>
                <div className="flex flex-col gap-3"><label className="text-sm font-semibold text-black ml-1">Email</label><input required type="email" placeholder={contactData.contactForm.emailPlaceholder} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-3 bg-white border border-black rounded-lg text-black focus:outline-none focus:border-black placeholder-black focus:ring-1 focus:ring-black transition-all" /></div>
                <div className="flex flex-col gap-3"><label className="text-sm font-semibold text-black ml-1">Message</label><textarea required rows={4} placeholder={contactData.contactForm.messagePlaceholder} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full p-3 bg-white border rounded-lg border-black text-black focus:outline-none placeholder-black focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"></textarea></div>
                <button type="submit" disabled={status === 'submitting' || status === 'success'} className={`w-full text-white font-bold rounded-lg py-4 transition-colors mt-4 cursor-pointer ${status === 'success' ? 'bg-green-600' : 'bg-black hover:bg-[#FF9C1A] hover:text-black'}`}>{status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : contactData.contactForm.submitButton}</button>
            </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}