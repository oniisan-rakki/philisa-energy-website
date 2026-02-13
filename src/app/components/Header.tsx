"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Phone, Mail, Globe, X, ChevronDown, Search } from 'lucide-react';

// --- CONFIGURATION ---
// Extended list of Google Translate supported languages
const LANGUAGES = [
    { code: 'af', label: 'Afrikaans' },
    { code: 'sq', label: 'Albanian' },
    { code: 'am', label: 'Amharic' },
    { code: 'ar', label: 'Arabic' },
    { code: 'hy', label: 'Armenian' },
    { code: 'az', label: 'Azerbaijani' },
    { code: 'eu', label: 'Basque' },
    { code: 'be', label: 'Belarusian' },
    { code: 'bn', label: 'Bengali' },
    { code: 'bs', label: 'Bosnian' },
    { code: 'bg', label: 'Bulgarian' },
    { code: 'ca', label: 'Catalan' },
    { code: 'ceb', label: 'Cebuano' },
    { code: 'ny', label: 'Chichewa' },
    { code: 'zh-CN', label: 'Chinese (Simplified)' },
    { code: 'zh-TW', label: 'Chinese (Traditional)' },
    { code: 'co', label: 'Corsican' },
    { code: 'hr', label: 'Croatian' },
    { code: 'cs', label: 'Czech' },
    { code: 'da', label: 'Danish' },
    { code: 'nl', label: 'Dutch' },
    { code: 'en', label: 'English' },
    { code: 'eo', label: 'Esperanto' },
    { code: 'et', label: 'Estonian' },
    { code: 'tl', label: 'Filipino' },
    { code: 'fi', label: 'Finnish' },
    { code: 'fr', label: 'French' },
    { code: 'fy', label: 'Frisian' },
    { code: 'gl', label: 'Galician' },
    { code: 'ka', label: 'Georgian' },
    { code: 'de', label: 'German' },
    { code: 'el', label: 'Greek' },
    { code: 'gu', label: 'Gujarati' },
    { code: 'ht', label: 'Haitian Creole' },
    { code: 'ha', label: 'Hausa' },
    { code: 'haw', label: 'Hawaiian' },
    { code: 'iw', label: 'Hebrew' },
    { code: 'hi', label: 'Hindi' },
    { code: 'hmn', label: 'Hmong' },
    { code: 'hu', label: 'Hungarian' },
    { code: 'is', label: 'Icelandic' },
    { code: 'ig', label: 'Igbo' },
    { code: 'id', label: 'Indonesian' },
    { code: 'ga', label: 'Irish' },
    { code: 'it', label: 'Italian' },
    { code: 'ja', label: 'Japanese' },
    { code: 'jw', label: 'Javanese' },
    { code: 'kn', label: 'Kannada' },
    { code: 'kk', label: 'Kazakh' },
    { code: 'km', label: 'Khmer' },
    { code: 'rw', label: 'Kinyarwanda' },
    { code: 'ko', label: 'Korean' },
    { code: 'ku', label: 'Kurdish (Kurmanji)' },
    { code: 'ky', label: 'Kyrgyz' },
    { code: 'lo', label: 'Lao' },
    { code: 'la', label: 'Latin' },
    { code: 'lv', label: 'Latvian' },
    { code: 'lt', label: 'Lithuanian' },
    { code: 'lb', label: 'Luxembourgish' },
    { code: 'mk', label: 'Macedonian' },
    { code: 'mg', label: 'Malagasy' },
    { code: 'ms', label: 'Malay' },
    { code: 'ml', label: 'Malayalam' },
    { code: 'mt', label: 'Maltese' },
    { code: 'mi', label: 'Maori' },
    { code: 'mr', label: 'Marathi' },
    { code: 'mn', label: 'Mongolian' },
    { code: 'my', label: 'Myanmar (Burmese)' },
    { code: 'ne', label: 'Nepali' },
    { code: 'no', label: 'Norwegian' },
    { code: 'or', label: 'Odia (Oriya)' },
    { code: 'ps', label: 'Pashto' },
    { code: 'fa', label: 'Persian' },
    { code: 'pl', label: 'Polish' },
    { code: 'pt', label: 'Portuguese' },
    { code: 'pa', label: 'Punjabi' },
    { code: 'ro', label: 'Romanian' },
    { code: 'ru', label: 'Russian' },
    { code: 'sm', label: 'Samoan' },
    { code: 'gd', label: 'Scots Gaelic' },
    { code: 'sr', label: 'Serbian' },
    { code: 'st', label: 'Sesotho' },
    { code: 'sn', label: 'Shona' },
    { code: 'sd', label: 'Sindhi' },
    { code: 'si', label: 'Sinhala' },
    { code: 'sk', label: 'Slovak' },
    { code: 'sl', label: 'Slovenian' },
    { code: 'so', label: 'Somali' },
    { code: 'es', label: 'Spanish' },
    { code: 'su', label: 'Sundanese' },
    { code: 'sw', label: 'Swahili' },
    { code: 'sv', label: 'Swedish' },
    { code: 'tg', label: 'Tajik' },
    { code: 'ta', label: 'Tamil' },
    { code: 'tt', label: 'Tatar' },
    { code: 'te', label: 'Telugu' },
    { code: 'th', label: 'Thai' },
    { code: 'tr', label: 'Turkish' },
    { code: 'tk', label: 'Turkmen' },
    { code: 'uk', label: 'Ukrainian' },
    { code: 'ur', label: 'Urdu' },
    { code: 'ug', label: 'Uyghur' },
    { code: 'uz', label: 'Uzbek' },
    { code: 'vi', label: 'Vietnamese' },
    { code: 'cy', label: 'Welsh' },
    { code: 'xh', label: 'Xhosa' },
    { code: 'yi', label: 'Yiddish' },
    { code: 'yo', label: 'Yoruba' },
    { code: 'zu', label: 'Zulu' },
];

export const Header = () => {
    // --- STATE ---
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    // Top Bar Features
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState({ code: 'en', label: 'English' });
    const [searchQuery, setSearchQuery] = useState('');

    // --- GOOGLE TRANSLATE INITIALIZATION ---
    useEffect(() => {
        // Initialize Google Translate
        const googleTranslateElementInit = () => {
            // @ts-ignore
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: 'en',
                    autoDisplay: false,
                },
                'google_translate_element'
            );
        };
        // @ts-ignore
        window.googleTranslateElementInit = googleTranslateElementInit;

        // Check for existing cookie to set initial state label
        const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
        if (match && match[1]) {
            const foundLang = LANGUAGES.find(l => l.code === match[1]);
            if (foundLang) setCurrentLang(foundLang);
        }
    }, []);

    // --- TRANSLATION LOGIC ---
    const handleLangSelect = (lang: { code: string; label: string }) => {
        // 1. Update State
        setCurrentLang(lang);
        setIsLangOpen(false);

        // 2. Set Google Translate Cookie
        // The format is /source_lang/target_lang
        document.cookie = `googtrans=/en/${lang.code}; path=/; domain=${window.location.hostname}`;
        document.cookie = `googtrans=/en/${lang.code}; path=/;`; // Fallback

        // 3. Reload page to apply translation
        window.location.reload();
    };

    // --- SCROLL LOGIC ---
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 250) {
                if (currentScrollY > lastScrollY.current && !isMobileMenuOpen) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            } else {
                setIsVisible(true);
            }
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobileMenuOpen]);

    // Filter languages for search
    const filteredLanguages = LANGUAGES.filter(lang => 
        lang.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {/* GOOGLE TRANSLATE SCRIPT */}
            <Script
                src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                strategy="afterInteractive"
            />
            {/* Hidden div for Google Translate to mount to */}
            <div id="google_translate_element" style={{ display: 'none' }}></div>


            {/* --- MAIN HEADER --- */}
            <header 
                className={`fixed top-0 w-full z-50 shadow-sm border-b border-white/10 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
            >
                {/* 1. TOP BAR */}
                <div className="bg-[#FF9C1A] text-black text-xs font-bold py-2 px-5 md:px-0 h-[50px] flex items-center relative z-20">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 h-full">
                        
                        {/* Left Side: Contact Info */}
                        <div className="flex items-center gap-6">
                            <a href="tel:+27703339325" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
                                <Phone size={14} fill="black" strokeWidth={0} /> 
                                <span>+27 70 333 9325</span>
                            </a>
                            <a href="mailto:info@philisaenergy.com" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
                                <div className="bg-black text-[#FF9C1A] rounded-full p-[2px]">
                                    <Mail size={10} strokeWidth={3} />
                                </div>
                                <span>info@philisaenergy.com</span>
                            </a>
                        </div>

                        {/* Right Side: Language & Contact */}
                        <div className="flex items-center gap-6 relative">
                            
                            {/* LANGUAGE SELECTOR */}
                            <div className="relative">
                                <button 
                                    onClick={() => setIsLangOpen(!isLangOpen)}
                                    className="flex items-center gap-2 hover:opacity-75 transition-opacity uppercase tracking-wide"
                                >
                                    <Globe size={14} strokeWidth={2.5} />
                                    <span className="max-w-[100px] truncate">{currentLang.label}</span>
                                    <ChevronDown size={12} className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}/>
                                </button>

                                {/* Dropdown Menu with Search */}
                                {isLangOpen && (
                                    <div className="absolute top-full right-0 mt-2 w-64 bg-white shadow-xl rounded-md overflow-hidden z-50 border border-gray-100 flex flex-col max-h-[400px]">
                                        
                                        {/* Search Input */}
                                        <div className="p-3 border-b border-gray-100 sticky top-0 bg-white">
                                            <div className="flex items-center bg-gray-100 rounded px-2">
                                                <Search size={14} className="text-gray-400" />
                                                <input 
                                                    type="text" 
                                                    placeholder="Search language..." 
                                                    className="w-full bg-transparent p-2 text-xs focus:outline-none"
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                    autoFocus
                                                />
                                            </div>
                                        </div>

                                        {/* Language List */}
                                        <div className="overflow-y-auto">
                                            {filteredLanguages.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => handleLangSelect(lang)}
                                                    className={`w-full text-left px-4 py-3 text-xs border-b last:border-0 border-gray-100 transition-colors flex justify-between items-center ${currentLang.code === lang.code ? 'bg-[#FF9C1A]/10 text-[#FF9C1A] font-bold' : 'hover:bg-gray-50 text-black'}`}
                                                >
                                                    {lang.label}
                                                    {currentLang.code === lang.code && <span className="text-[10px]">●</span>}
                                                </button>
                                            ))}
                                            {filteredLanguages.length === 0 && (
                                                <div className="p-4 text-center text-gray-400 text-xs">No languages found</div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Contact Trigger */}
                            <button 
                                onClick={() => setIsContactOpen(true)}
                                className="flex items-center gap-2 hover:opacity-75 transition-opacity uppercase tracking-wide"
                            >
                                <Phone size={14} strokeWidth={2.5} />
                                <span>Contact Us</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* 2. MAIN NAV */}
                <div className="bg-[linear-gradient(90deg,#0F3460_0%,#020E22_100%)] relative z-10 h-[100px] flex items-center">
                    <div className="container mx-auto px-5 md:px-0 h-full flex items-center justify-between">
                        <Link href="/" className="font-bold text-2xl flex items-center gap-2">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0F3460] font-bold">PE</div>
                            <span className="text-white">PHILISA <span className="font-light">ENERGY</span></span>
                        </Link>

                        <nav className="hidden md:flex items-center gap-12 text-white font-['Inter'] text-[13px] font-semibold leading-normal tracking-wide">
                            {['About', 'Solutions', 'Industries', 'Technology', 'Sustainability', 'Careers', 'News', 'Contact'].map((item) => (
                                 <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#FF9C1A] transition-colors">
                                    {item}
                                </Link>
                            ))}
                        </nav>
                        
                        <button className="md:hidden text-2xl text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            ☰
                        </button>
                    </div>
                </div>
                
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden bg-white border-t border-gray-100 flex flex-col p-6 gap-4 text-sm font-medium text-black shadow-lg relative z-0">
                         {['About', 'Solutions', 'Industries', 'Technology', 'Sustainability', 'Careers', 'News', 'Contact'].map((item) => (
                             <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMobileMenuOpen(false)}>
                                {item}
                            </Link>
                        ))}
                    </nav>
                )}
            </header>

            {/* --- CONTACT MODAL --- */}
            {isContactOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsContactOpen(false)}></div>
                    <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="bg-[#0F3460] p-6 flex justify-between items-center text-white">
                            <h3 className="text-xl font-bold">Get in Touch</h3>
                            <button onClick={() => setIsContactOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-8">
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Name</label>
                                    <input type="text" className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#FF9C1A] focus:ring-1 focus:ring-[#FF9C1A]" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
                                    <input type="email" className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#FF9C1A] focus:ring-1 focus:ring-[#FF9C1A]" placeholder="email@example.com" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Message</label>
                                    <textarea rows={4} className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#FF9C1A] focus:ring-1 focus:ring-[#FF9C1A] resize-none" placeholder="How can we help?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-[#FF9C1A] hover:bg-[#e88d17] text-black font-bold py-3 rounded transition-colors uppercase text-sm">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}