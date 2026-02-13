"use client";
import React from 'react';

export const Footer = () => {
    return (
        <footer id="contact" className="w-full">
            
            {/* 1. MAIN FOOTER SECTION */}
            {/* Background: Linear Gradient Blue to Dark */}
            <div className="bg-[linear-gradient(90deg,#0F3460_0%,#020E22_100%)] text-white pt-16 pb-16">
                <div className="container mx-auto px-6 md:px-0 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* Column 1: Brand / Logo */}
                        <div className="space-y-6">
                            {/* Logo Placeholder - replicating the visual hierarchy from the image */}
                            <div className="flex flex-col">
                                <h2 className="text-3xl font-bold tracking-wider leading-none">PHILISA</h2>
                                <h2 className="text-3xl font-light tracking-wider leading-none">ENERGY</h2>
                                <p className="text-xs text-gray-300 mt-3 tracking-wide">
                                    Powering Tomorrow's Sustainable Future
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        {/* Matches the specific list in your screenshot */}
                        <div>
                            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                            <ul className="space-y-4 text-sm text-gray-200">
                                <li><a href="#solutions" className="hover:text-[#FF9C1A] transition-colors">Solutions</a></li>
                                <li><a href="#industries" className="hover:text-[#FF9C1A] transition-colors">Industries</a></li>
                                <li><a href="#technology" className="hover:text-[#FF9C1A] transition-colors">Technology</a></li>
                                <li><a href="#sustainability" className="hover:text-[#FF9C1A] transition-colors">Sustainability</a></li>
                                <li><a href="#careers" className="hover:text-[#FF9C1A] transition-colors">Careers</a></li>
                                <li><a href="#news" className="hover:text-[#FF9C1A] transition-colors">News</a></li>
                                <li><a href="#about" className="hover:text-[#FF9C1A] transition-colors">About</a></li>
                            </ul>
                        </div>

                         {/* Column 3: About Us */}
                         {/* Contains the specific paragraph from your screenshot */}
                         <div>
                            <h4 className="font-bold text-lg mb-6">About Us</h4>
                            <p className="text-sm text-gray-200 leading-relaxed">
                                Philisa Energy is a proudly South African clean fuels pioneer. We transform used cooking oil into high-quality biodiesel, empowering commercial fleets and industries to decarbonize with transparent, locally produced energy. We are dedicated to turning today's waste into tomorrow's power—sustainably and responsibly.
                            </p>
                        </div>

                        {/* Column 4: Contact Us */}
                        {/* Matches email, phone, and social layout */}
                        <div>
                            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
                            <div className="space-y-6 text-sm text-gray-200">
                                <a href="mailto:info@philisaenergy.com" className="block hover:text-[#FF9C1A] transition-colors">
                                    info@philisaenergy.com
                                </a>
                                <a href="tel:+27703339325" className="block hover:text-[#FF9C1A] transition-colors">
                                    +27 70 333 9325
                                </a>

                                {/* Social Icons (White squares with black icons as per design style) */}
                                <div className="flex gap-4 pt-2">
                                    {/* Instagram */}
                                    <a href="#" className="bg-white text-black p-1.5 rounded-[4px] hover:bg-[#FF9C1A] transition-colors w-8 h-8 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </a>
                                    {/* X (Twitter) */}
                                    <a href="#" className="bg-white text-black p-1.5 rounded-[4px] hover:bg-[#FF9C1A] transition-colors w-8 h-8 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                                    </a>
                                    {/* Facebook */}
                                    <a href="#" className="bg-white text-black p-1.5 rounded-[4px] hover:bg-[#FF9C1A] transition-colors w-8 h-8 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                    </a>
                                    {/* LinkedIn */}
                                    <a href="#" className="bg-white text-black p-1.5 rounded-[4px] hover:bg-[#FF9C1A] transition-colors w-8 h-8 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. BOTTOM BAR SECTION */}
            {/* Background: Orange (#FF9C1A) | Text: Black */}
            <div className="bg-[#FF9C1A] text-black py-4 border-t border-[#e88d17]">
                <div className="container mx-auto px-6 md:px-0 max-w-7xl flex flex-col md:flex-row justify-between items-center text-[11px] font-bold tracking-wide">
                    {/* Left Side Links */}
                    <div className="flex flex-wrap gap-6 md:gap-8 mb-2 md:mb-0 justify-center md:justify-start">
                        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Accessibility</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                    {/* Right Side Copyright */}
                    <div className="text-center md:text-right">
                        <p>Copyright © 2024 - 2026 Philisa Energy. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}