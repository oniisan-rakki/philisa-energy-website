"use client";
import React, { useRef, useState, useEffect } from 'react';

type CarouselProps = {
  items: any[];
  renderItem: (item: any) => React.ReactNode;
};

export const Carousel = ({ items, renderItem }: CarouselProps) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftBtn, setShowLeftBtn] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftBtn(scrollLeft > 10);
            
            const maxScroll = scrollWidth - clientWidth;
            setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            // Scroll by card width (variable on mobile) + gap
            // On mobile, card is 85vw, roughly 320px-350px. 320 is a safe scroll amount.
            const scrollAmount = direction === 'left' ? -320 : 320;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            handleScroll();
        }
        return () => container?.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative w-full group">
            <div 
                ref={scrollContainerRef}
                className="flex items-stretch overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-4 gap-4 px-4 md:px-0"
            >
                {items.map((item, index) => (
                    <div className="flex-shrink-0 snap-center md:snap-start flex h-auto" key={index}>
                        {renderItem(item)}
                    </div>
                ))}
            </div>
      
            {/* BUTTONS: 
                1. Removed 'hidden md:flex' -> Now just 'flex' (Visible on all screens)
                2. Adjusted Margins: 
                   - Mobile: 'ml-[-10px]' / 'mr-[-10px]' (Keeps them visible on screen edges)
                   - Desktop: 'md:ml-[-25px]' / 'md:mr-[-25px]' (Hangs them nicely outside content)
            */}
            <div className="flex pointer-events-none absolute top-[141px] left-0 right-0 justify-between px-2 z-10 -translate-y-1/2">
                <div className="pointer-events-auto">
                    {showLeftBtn && (
                        <button onClick={() => scroll('left')} className="w-[50px] h-[50px] bg-white text-black shadow-lg rounded-full flex items-center justify-center hover:scale-105 active:scale-95 ml-[-10px] md:ml-[-25px]">
                             <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 18L2 10L10 2" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                    )}
                </div>
                <div className="pointer-events-auto">
                    <button onClick={() => scroll('right')} className="w-[50px] h-[50px] bg-white text-black shadow-lg rounded-full flex items-center justify-center hover:scale-105 active:scale-95 mr-[-10px] md:mr-[-25px]">
                         <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L10 10L2 18" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                </div>
            </div>

            <div className="flex gap-2 mt-4 ml-4 md:ml-0">
                {[0, 1, 2].map((i) => {
                    const isActive = (i === 0 && scrollProgress < 0.33) || (i === 1 && scrollProgress >= 0.33 && scrollProgress < 0.66) || (i === 2 && scrollProgress >= 0.66);
                    return <div key={i} className={`h-[4px] rounded-full transition-all duration-300 ${isActive ? 'w-[30px] bg-[#FF9C1A]' : 'w-[30px] bg-gray-300'}`} />;
                })}
            </div>
        </div>
    )
}