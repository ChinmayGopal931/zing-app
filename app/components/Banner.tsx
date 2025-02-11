"use client"
import React from 'react';

const SlidingBanner = () => {
  return (
    <div className="bg-black text-white overflow-hidden whitespace-nowrap relative">
      <div className="animate-slide inline-block">
        <p className="py-1 px-4 inline-block">
          This product is intended for Nicotine Replacement Therapy, please use responsibly!
          
          
           • 


          Zing contains nicotine which is addictive • Do not promote Zing to minors
        </p>

        <p className="py-1 px-4 inline-block">

        </p>

        <p className="py-1 px-4 inline-block">

        </p>

        <p className="py-1 px-4 inline-block">

        </p>

        <p className="py-1 px-4 inline-block">

        </p>
        <p className="py-1 px-4 inline-block">

        </p>

        <p className="py-1 px-4 inline-block">

        </p>
        <p className="py-1 px-4 inline-block">
          This product is intended for Nicotine Replacement Therapy, please use responsibly! 
          
          • 


          Zing contains nicotine which is addictive • Do not promote Zing to minors
        </p>
      </div>
      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SlidingBanner;