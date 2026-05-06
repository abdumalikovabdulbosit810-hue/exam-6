import React from 'react';
import Ourn1 from "../../assets/Ourn1.png"

const Ourvision = () => {
  return (
    <section className="bg-white py-16 px-4  font-sans">
      <div className="mx-auto">
        
        <div className="mb-12">
          <h4 className="text-gray-900 tracking-widest text-xs font-bold mb-4">
            Our Vision
          </h4>
          <h2 className="font-bold text-[#1d2130] leading-tight mb-6 ">
            We want to get local identification in every corner of the world in this era of global citizenship.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            Through True Rich Attended does no end it his mother since real had half
            every him case in packages enquire we up ecstatic unsatiable saw his giving
            Remain expense you position concluded.
          </p>
        </div>

        <div className="w-full h-72 overflow-hidden rounded-sm ">
          <img 
            src={Ourn1} 
            alt="Office Vision" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Ourvision;