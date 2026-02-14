"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Phone, Mail, Globe, ChevronDown, Search, X } from 'lucide-react';

const LANGUAGES = [
    { code: 'en', label: 'English' }, { code: 'af', label: 'Afrikaans' }, 
    { code: 'zu', label: 'Zulu' }, { code: 'xh', label: 'Xhosa' }, 
    { code: 'fr', label: 'French' }, { code: 'de', label: 'German' },
    { code: 'pt', label: 'Portuguese' }, { code: 'es', label: 'Spanish' },
    { code: 'zh-CN', label: 'Chinese' }, { code: 'ar', label: 'Arabic' },
];

export const Header = () => {
    // UI State
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState({ code: 'en', label: 'English' });
    const [searchQuery, setSearchQuery] = useState('');

    // Form State
    const [formData, setFormData] = useState({ fullName: '', email: '', message: '', honeypot: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    // Email Validation Helper
    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Form Handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // 1. Validation
        if (formData.honeypot) return; // Bot trap
        if (!formData.fullName || !formData.email || !formData.message) {
            alert("Please fill in all fields.");
            return;
        }
        if (!isValidEmail(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        setStatus('submitting');

        try {
            const response = await fetch("https://us-central1-philisa-energy-sa.cloudfunctions.net/sendContactMessage", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.fullName,
                    email: formData.email,
                    message: formData.message,
                    honeypot: formData.honeypot
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ fullName: '', email: '', message: '', honeypot: '' });
                // Optional: Close modal after 2 seconds
                setTimeout(() => {
                    setIsContactOpen(false);
                    setStatus('idle');
                }, 3000);
            } else {
                throw new Error('Server error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    // Google Translate Init
    useEffect(() => {
        // @ts-ignore
        window.googleTranslateElementInit = () => {
            // @ts-ignore
            new window.google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false }, 'google_translate_element');
        };
    }, []);

    const handleLangSelect = (lang: { code: string; label: string }) => {
        setCurrentLang(lang);
        setIsLangOpen(false);
        document.cookie = `googtrans=/en/${lang.code}; path=/; domain=${window.location.hostname}`;
        document.cookie = `googtrans=/en/${lang.code}; path=/;`;
        window.location.reload();
    };

    // Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 250) setIsVisible(currentScrollY <= lastScrollY.current || isMobileMenuOpen);
            else setIsVisible(true);
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobileMenuOpen]);

    const filteredLanguages = LANGUAGES.filter(lang => lang.label.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <>
            <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
            <div id="google_translate_element" style={{ display: 'none' }}></div>

            <header className={`fixed top-0 w-full z-50 shadow-sm border-b border-white/10 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                {/* Top Bar */}
                <div className="bg-[#FF9C1A] text-black text-xs font-bold min-h-[50px] md:h-[50px] py-2 md:py-0 px-5 md:px-0 flex items-center relative z-20">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 h-full">
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            <a href="tel:+27703339325" className="flex items-center gap-2 hover:opacity-75"><Phone size={14} fill="black" strokeWidth={0} /><span>+27 70 333 9325</span></a>
                            <a href="mailto:info@philisaenergy.com" className="flex items-center gap-2 hover:opacity-75"><div className="bg-black text-[#FF9C1A] rounded-full p-[2px]"><Mail size={10} strokeWidth={3} /></div><span>info@philisaenergy.com</span></a>
                        </div>
                        <div className="flex items-center gap-6 relative">
                            {/* Language Selector */}
                            <div className="relative">
                                <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 hover:opacity-75"><Globe size={14} strokeWidth={2.5} /><span className="max-w-[100px] truncate">{currentLang.label}</span><ChevronDown size={12} /></button>
                                {isLangOpen && (
                                    <div className="absolute top-full right-0 md:right-0 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 mt-2 w-64 bg-white shadow-xl rounded-md z-50 border border-gray-100 flex flex-col max-h-[400px]">
                                        <div className="p-3 border-b sticky top-0 bg-white"><div className="flex items-center bg-gray-100 rounded px-2"><Search size={14} className="text-gray-400" /><input type="text" placeholder="Search..." className="w-full bg-transparent p-2 text-xs outline-none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} autoFocus /></div></div>
                                        <div className="overflow-y-auto">{filteredLanguages.map((lang) => (<button key={lang.code} onClick={() => handleLangSelect(lang)} className="w-full text-left px-4 py-3 text-xs border-b hover:bg-gray-50">{lang.label}</button>))}</div>
                                    </div>
                                )}
                            </div>
                            <button onClick={() => setIsContactOpen(true)} className="flex items-center gap-2 hover:opacity-75"><Phone size={14} strokeWidth={2.5} /><span>Contact Form</span></button>
                        </div>
                    </div>
                </div>

                {/* Main Nav */}
                <div className="bg-[linear-gradient(90deg,#0F3460_0%,#020E22_100%)] relative z-10 h-[100px] flex items-center">
                    <div className="container mx-auto px-5 md:px-0 h-full flex items-center justify-between">
                        <Link href="/" className="font-bold text-2xl flex items-center gap-2"><div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0F3460] font-bold">PE</div><span className="text-white">PHILISA <span className="font-light">ENERGY</span></span></Link>
                        <nav className="hidden md:flex items-center gap-12 text-white font-['Inter'] text-[13px] font-semibold tracking-wide">
                            {['About', 'Solutions', 'Industries', 'Technology', 'Sustainability', 'Careers', 'News', 'Contact'].map((item) => (
                                <Link key={item} href={item === 'About' ? '#our-story' : `#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#FF9C1A] transition-colors">{item}</Link>
                            ))}
                        </nav>
                        <button className="md:hidden text-2xl text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>☰</button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden bg-white border-t border-gray-100 flex flex-col p-6 gap-4 text-sm font-medium text-black shadow-lg">
                        <Link href="#our-story" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                        {['Solutions', 'Industries', 'Technology', 'Sustainability', 'Careers', 'News', 'Contact'].map((item) => (
                            <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMobileMenuOpen(false)}>{item}</Link>
                        ))}
                    </nav>
                )}
            </header>

            {/* POP-UP CONTACT FORM */}
            {isContactOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsContactOpen(false)}></div>
                    <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="bg-[#0F3460] p-6 flex justify-between items-center text-white"><h3 className="text-2xl font-black">Get in Touch</h3><button onClick={() => setIsContactOpen(false)}><X size={20} /></button></div>
                        <div className="p-8">
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                {/* Honeypot */}
                                <div className="hidden"><input type="text" name="honeypot" value={formData.honeypot} onChange={(e) => setFormData({...formData, honeypot: e.target.value})} /></div>
                                
                                <div>
                                    <label className="block text-xs font-bold text-black mb-3">Full Name</label>
                                    <input required type="text" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full border border-black rounded p-3 text-sm focus:outline-none focus:border-[#FF9C1A] focus:ring-1 focus:ring-[#FF9C1A]" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-black mb-3">Email</label>
                                    <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full border border-black rounded p-3 text-sm focus:outline-none focus:border-[#FF9C1A] focus:ring-1 focus:ring-[#FF9C1A]" placeholder="email@example.com" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-black mb-3">Message</label>
                                    <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full border border-black rounded p-3 text-sm focus:outline-none focus:border-[#FF9C1A] focus:ring-1 focus:ring-[#FF9C1A] resize-none" placeholder="How can we help?"></textarea>
                                </div>
                                
                                <button type="submit" disabled={status === 'submitting' || status === 'success'} className={`w-full font-bold py-3 rounded transition-colors text-sm ${status === 'success' ? 'bg-green-600 text-white' : 'bg-[#FF9C1A] hover:bg-[#0F3460] hover:text-white text-black'}`}>
                                    {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error. Try Again.' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};