"use client";
import React from 'react';
import Image from "next/image";
import { Carousel } from "../components/Carousel";

// Data Imports
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
return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full pt-[150px]">
      
      {/* 1. HERO SECTION */}
      <section id="home" className="relative w-full h-[500px] flex items-center bg-zinc-100 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
             <div className="w-full h-full bg-gradient-to-r from-gray-500 to-gray-700" /> 
        </div>
        
        {/* Content Wrapper - Aligned with Header Container */}
        <div className="relative z-10 container mx-auto px-5 md:px-0 h-full flex items-center">
            
            {/* Content Box - Fixed 875px x 200px */}
            <div className="w-full md:w-[875px] h-[200px] bg-white/90 backdrop-blur-sm px-8 md:px-12 flex flex-col justify-center items-start rounded-sm shadow-sm">
                
                {/* H1 */}
                <h1 className="text-black font-['Inter'] text-[32px] font-black leading-normal mb-2">
                  {homeHeroSection.header}
                </h1>
                
                {/* Paragraph */}
                <p className="text-black font-['Inter'] text-[12px] font-normal leading-normal mb-4 max-w-2xl line-clamp-3">
                  {homeHeroSection.description}
                </p>
                
                {/* Button */}
                <button className="px-6 py-2 bg-black text-white text-xs font-semibold rounded hover:bg-gray-800 transition-colors">
                  {homeHeroSection.button}
                </button>
            </div>
        </div>

        {/* Scroll To Discover - Centered at Bottom */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20">
             <span className="text-white font-['Inter'] text-[10px] font-extrabold leading-normal uppercase">
                SCROLL TO DISCOVER
             </span>
             
             {/* Chevron Button */}
             <div 
                className="w-[15px] h-[15px] bg-gray-300 rounded-full flex items-center justify-center"
                style={{
                    background: 'url(/path-to-chevron.png) lightgray 50% / contain no-repeat' 
                }}
             >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-2 h-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
             </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section id="our-story" className="w-full py-10 md:py-15 bg-white">
        <div className="container mx-auto px-10 md:px-0 max-w-7xl">
          <h4 className="w-fit mb-2 text-[14px] font-black leading-normal uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">
            {ourStoryData.subtitle}
          </h4>
          <h2 className="text-black font-black text-[24px] md:text-[32px] mb-7">
            {ourStoryData.header}
          </h2>

          {/* Text Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-10">
            <div>
               <p className="text-black font-['Inter'] text-[14px] not-italic font-light leading-[28px]">
                 {ourStoryData.paragraphOne}
               </p>
            </div>
            <div>
               <p className="text-black font-['Inter'] text-[14px] not-italic font-light leading-[28px]">
                 {ourStoryData.paragraphTwo}
               </p>
            </div>
          </div>

          {/* Image Row */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="bg-black aspect-video w-full rounded-sm">
                 {/* <Image src={ourStoryData.imageOne} ... /> */}
            </div>
            <div className="bg-black aspect-video w-full rounded-sm">
                 {/* <Image src={ourStoryData.imageTwo} ... /> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. OUR MISSION */}
      <section id="our-mission" className="w-full py-10 md:py-15 bg-white">
        <div className="container mx-auto px-5 md:px-0 max-w-7xl">
           <h4 className="w-fit mb-2 text-[14px] font-black leading-normal uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">
            {ourMissionData.subtitle}
          </h4>
          <h2 className="text-black font-black text-[24px] md:text-[32px] mb-10">
            {ourMissionData.header}
          </h2>
          
          {/* Container: Using Grid to ensure internal row alignment across all cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-[25px] w-full items-stretch">
            {ourMissionData.items.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col p-8 hover:shadow-lg transition-shadow min-h-[350px]"
                style={{
                    background: 'linear-gradient(#FFF, #FFF) padding-box, linear-gradient(90deg, #FF9C1A, #0F3460, #020E22) border-box',
                    border: '1px solid transparent',
                }}
              >
                 {/* 1. Icon Row - Fixed height ensures the next element (Heading) starts at the same spot in every card */}
                 <div className="h-12 flex items-center justify-start">
                    <div className="w-12 h-12 flex-shrink-0">
              <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-contain"
              />
          </div>
       </div>

                 {/* 2. Heading Row - Fixed minimum height ensures the Paragraph starts at the same spot in every card */}
                 <div className="mt-7 min-h-[56px] flex items-start">
                    <h3 className="text-black font-['Inter'] text-[21px] font-black leading-tight text-left">
                        {item.title}
                    </h3>
                 </div>

                 {/* 3. Text Row */}
                 <div className="mt-5">
                    <p className="text-black font-['Inter'] text-[14px] not-italic font-light leading-[28px] text-left">
                        {item.description}
                    </p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS */}
      {ourSolutionsData.map((solution, idx) => (
        <section key={idx} id="solutions" className="w-full py-10 md:py-15 bg-white">
           <div className="container mx-auto px-10 md:px-0 max-w-7xl">
            <h4 className="w-fit mb-2 text-[14px] font-black leading-normal uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">
                {solution.subtitle}
            </h4>
            <h2 className="text-black font-black text-[24px] md:text-[32px] mb-7.5">
                {solution.header}
            </h2>
            
            {/* Text Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                 <p className="text-black font-['Inter'] text-[14px] not-italic font-light leading-[28px]">{solution.paragraphOne}</p>
                 <p className="text-black font-['Inter'] text-[14px] not-italic font-light leading-[28px]">{solution.paragraphTwo}</p>
            </div>

            {/* Image Row - FIXED: Removed md:h-auto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 {/* Changed to h-64 (or md:h-80 for taller) to ensure it shows up */}
                 <div className="bg-black w-full h-64 md:h-80 rounded-sm"></div>
                 <div className="bg-black w-full h-64 md:h-80 rounded-sm"></div>
            </div>
           </div>
        </section>
      ))}

      {/* 5. INDUSTRIES (Carousel) */}
      <section id="industries" className="w-full py-10 md:py-15 bg-white">
        <div className="container mx-auto px-10 md:px-0 max-w-7xl">
           <h4 className="w-fit mb-2 text-[14px] font-black leading-normal uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">
            {industriesData.subtitle}
           </h4>
           <h2 className="text-black font-black text-[24px] md:text-[32px] mb-6">
            {industriesData.header}
           </h2>
           
           <Carousel 
            items={industriesData.items}
            renderItem={(news) => (
                // 3. Root: REMOVED 'h-full'. 
                //    We allow the 'flex' parent to stretch this div naturally.
                <div className="flex flex-col w-[350px]">
                    
                    {/* Image Container */}
                    <div className="w-[350px] h-[250px] bg-gray-200 flex-shrink-0 relative">
                        {/* <Image src={news.image} ... /> */}
                    </div>

                    {/* 4. Text Box: 'flex-1' makes it grow to fill the stretched space */}
                    <div className="w-[350px] flex-1 flex flex-col p-8 bg-white"
                        style={{
                            borderStyle: 'solid',
                            borderWidth: '0px 1px 1px 1px', 
                            borderColor: 'transparent',
                            background: `
                                linear-gradient(#FFF, #FFF) padding-box, 
                                linear-gradient(90deg, #FF9C1A, #0F3460, #020E22) border-box
                            `
                        }}
                    >
                        <h3 className="text-black font-['Inter'] text-[16px] font-black uppercase leading-normal mb-4">
                            {news.title}
                        </h3>

                        {/* Text description */}
                        <p className="w-[250px] text-black font-['Inter'] text-[14px] font-light leading-[28px]">
                            {news.description}
                        </p>
                    </div>
                </div>
            )}
            />
        </div>
      </section>

      {/* 6. TECHNOLOGY (Refactored) */}
      {technologyData.map((tech, idx) => (
      <section key={idx} id="technology" className="w-full py-24 bg-white">
        <div className="container mx-auto px-10 md:px-0 max-w-7xl">
          <h4 className="w-fit mb-2 text-[14px] font-black leading-normal uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">
            {tech.subtitle}
          </h4>
          <h2 className="text-black font-black text-[24px] md:text-[32px] mb-7">
            {tech.header}
          </h2>

          {/* Text Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-10">
             <p className="text-black font-['Inter'] text-[14px] not-italic font-light leading-[28px]">{tech.paragraphOne}</p>
             <p className="text-black font-['Inter'] text-[14px] not-italic font-light leading-[28px]">{tech.paragraphTwo}</p>
          </div>

          {/* Image Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             <div className="bg-black w-full h-64 rounded-sm"></div>
             <div className="bg-black w-full h-64 rounded-sm"></div>
          </div>
        </div>
      </section>
      ))}

      {/* 7. SUSTAINABILITY */}
      <section id="sustainability" className="w-full py-10 md:py-15 bg-white">
         <div className="container mx-auto px-5 md:px-0 max-w-7xl">
           <h4 className="w-fit mb-2 text-[14px] font-black leading-normal uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">
            {sustainabilityData.subtitle}
          </h4>
          <h2 className="text-black font-black text-[24px] md:text-[32px] mb-10">
            {sustainabilityData.header}
          </h2>
          {/* Container: Using Grid to ensure internal row alignment across all cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-[25px] w-full items-stretch">
            {sustainabilityData.items.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col p-8 hover:shadow-lg transition-shadow min-h-[350px]"
                style={{
                    background: 'linear-gradient(#FFF, #FFF) padding-box, linear-gradient(90deg, #FF9C1A, #0F3460, #020E22) border-box',
                    border: '1px solid transparent',
                }}
              >
                 {/* 1. Icon Row - Fixed height ensures the next element (Heading) starts at the same spot in every card */}
                 <div className="h-12 flex items-center justify-start">
                    <div className="w-12 h-12 flex-shrink-0">
              <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-contain"
              />
          </div>
       </div>

                 {/* 2. Heading Row - Fixed minimum height ensures the Paragraph starts at the same spot in every card */}
                 <div className="mt-7 min-h-[56px] flex items-start">
                    <h3 className="text-black font-['Inter'] text-[21px] font-black leading-tight text-left">
                        {item.title}
                    </h3>
                 </div>

                 {/* 3. Text Row */}
                 <div className="mt-0">
                    <p className="text-black font-['Inter'] text-[14px] not-italic font-light leading-[28px] text-left">
                        {item.description}
                    </p>
                 </div>
              </div>
            ))}
          </div>
         </div>
      </section>

      {/* 8. JOIN THE REVOLUTION (Refactored) */}
      <section id="careers" className="w-full py-10 md:py-15 bg-white">
        <div className="container mx-auto px-10 md:px-0 max-w-7xl">
           <h4 className="w-fit mb-2 text-[14px] font-black leading-normal uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">
            {joinTheRevolutionData.subtitle}
           </h4>
           <h2 className="text-black font-black text-[24px] md:text-[32px] mb-7">
            {joinTheRevolutionData.header}
           </h2>

           {/* Text Row */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-10">
             <p className="text-black font-['Inter'] text-[14px] not-italic font-light leading-[28px]">
                {joinTheRevolutionData.paragraphOne}
             </p>
             <p className="text-black font-['Inter'] text-[14px] not-italic font-light leading-[28px]">
                {joinTheRevolutionData.paragraphTwo}
             </p>
           </div>

           {/* Image Row */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="bg-zinc-800 w-full h-64 rounded-sm"></div>
             <div className="bg-zinc-800 w-full h-64 rounded-sm"></div>
           </div>
        </div>
      </section>

      {/* 9. NEWS (Carousel) */}
      <section id="news" className="w-full py-10 md:py-15 bg-white">
        <div className="container mx-auto px-10 md:px-0 max-w-7xl">
           <h4 className="w-fit mb-2 text-[14px] font-black leading-normal uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">
            {newsData.subtitle}
           </h4>
           <h2 className="text-black font-black text-[24px] md:text-[32px] mb-5">
            {newsData.header}
           </h2>
           
           <Carousel 
             items={newsData.items}
             renderItem={(news) => (
                <div className="flex flex-col w-[350px]">
                    
                    {/* Image Container */}
                    <div className="w-[350px] h-[250px] bg-gray-200 flex-shrink-0 relative">
                        {/* <Image src={news.image} alt={news.title} fill className="object-cover" /> */}
                    </div>

                    {/* Text Box: Gradient Border + Flex Grow */}
                    <div className="w-[350px] flex-1 flex flex-col p-8 bg-white"
                        style={{
                            borderStyle: 'solid',
                            borderWidth: '0px 1px 1px 1px', 
                            borderColor: 'transparent',
                            background: `
                                linear-gradient(#FFF, #FFF) padding-box, 
                                linear-gradient(90deg, #FF9C1A, #0F3460, #020E22) border-box
                            `
                        }}
                    >
                        {/* Heading */}
                        <h3 className="text-black font-['Inter'] text-[16px] font-black uppercase leading-normal mb-4">
                            {news.title}
                        </h3>
                        
                        {/* Body Text: Removed 'line-clamp-4' so full text shows */}
                        <p className="w-[250px] text-black font-['Inter'] text-[14px] font-light leading-[28px] mb-6">
                            {news.description}
                        </p>
                        
                        {/* Button: Pushed to bottom */}
                        <button className="bg-[#FF9C1A] text-white px-6 py-2 text-sm font-semibold rounded self-start hover:bg-[#e88d17] transition-colors mt-auto cursor-pointer">
                            {news.button}
                        </button>
                    </div>
                </div>
             )}
           />
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section id="contact" className="w-full py-10 md:py-15 bg-white">
        <div className="container mx-auto px-10 md:px-0 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Contact Info */}
            <div className="flex flex-col justify-center">
                <h4 className="w-fit mb-2 text-[14px] font-black leading-normal uppercase bg-gradient-to-r from-[#FF9C1A] via-[#0F3460] to-[#020E22] text-transparent bg-clip-text font-['Inter']">
                    {contactData.subtitle}
                </h4>
              <h2 className="text-black font-black text-[24px] md:text-[32px] mb-5">
                {contactData.header}
              </h2>
              <p className="text-black font-['Inter'] text-[14px] not-italic font-light leading-[28px] mb-10">
                {contactData.description}
              </p>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                     </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black mb-1">Phone</h4>
                    <p className="text-black font-medium hover:underline hover:text-[#FF9C1A] cursor-pointer">
                        {contactData.contactDetails.phoneNumber}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                     </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black mb-1">Email</h4>
                    <p className="text-black font-medium hover:underline hover:text-[#FF9C1A] cursor-pointer">
                        {contactData.contactDetails.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            
            {/* Right Column: Form */}
            <div 
            className="p-8 md:p-10 shadow-xl rounded-lg"
            style={{
                // Gradient Border Trick (Full 1px border)
                border: '1px solid transparent',
                background: `
                    linear-gradient(#FFF, #FFF) padding-box, 
                    linear-gradient(90deg, #FF9C1A, #0F3460, #020E22) border-box
                `
            }}
            >
            <form className="space-y-6">
                
                {/* First Row: First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Group 1 */}
                    <div className="flex flex-col gap-3">
                        <label className="text-sm font-semibold text-black ml-1">First Name</label>
                        <input 
                            type="text" 
                            placeholder={contactData.contactForm.firstNamePlaceholder} 
                            className="w-full p-3 bg-white rounded-lg border border-black text-black focus:outline-none focus:border-black placeholder-black focus:ring-1 focus:ring-black transition-all" 
                        />
                    </div>

                    {/* Group 2 */}
                    <div className="flex flex-col gap-3">
                        <label className="text-sm font-semibold text-black ml-1">Last Name</label>
                        <input 
                            type="text" 
                            placeholder={contactData.contactForm.lastNamePlaceholder} 
                            className="w-full p-3 bg-white border rounded-lg border-black text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-black placeholder-black transition-all" 
                        />
                    </div>
                </div>
                
                {/* Group 3: Email */}
                <div className="flex flex-col gap-3">
                    <label className="text-sm font-semibold text-black ml-1">Email</label>
                    <input 
                        type="email" 
                        placeholder={contactData.contactForm.emailPlaceholder} 
                        className="w-full p-3 bg-white border border-black rounded-lg text-black focus:outline-none focus:border-black placeholder-black focus:ring-1 focus:ring-black transition-all" 
                    />
                </div>

                {/* Group 4: Message */}
                <div className="flex flex-col gap-3">
                    <label className="text-sm font-semibold text-black ml-1">Message</label>
                    <textarea 
                        rows={4} 
                        placeholder={contactData.contactForm.messagePlaceholder} 
                        className="w-full p-3 bg-white border rounded-lg border-black text-black focus:outline-none placeholder-black focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"
                    ></textarea>
                </div>

                {/* Button with Custom Hover Colors & No Rounding */}
                <button 
                    type="submit" 
                    className="w-full bg-black text-white font-bold rounded-lg py-4 hover:bg-[#FF9C1A] hover:text-black transition-colors mt-4 cursor-pointer"
                >
                    {contactData.contactForm.submitButton}
                </button>
            </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}