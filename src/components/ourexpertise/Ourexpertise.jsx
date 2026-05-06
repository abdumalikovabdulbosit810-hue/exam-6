import React from 'react';
import Ou1 from "../../assets/Ou1.svg"
import Ou2 from "../../assets/Ou2.svg"
import Ou3 from "../../assets/Ou3.svg"

const Ourexpertise = () => {
  return (
    <section className="bg-[#eef8f9] py-20 px-4 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          <h4 className="text-gray-600 uppercase tracking-widest text-sm font-semibold">
            Our Expertise
          </h4>

          <h2 className="text-5xl font-bold text-[#1d2130] leading-tight">
            We want to get local identification in every corner of the world in this era of global citizenship
          </h2>

          <p className="text-gray-500 leading-relaxed max-w-lg">
            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -top-4 w-4 h-4 bg-blue-600"></div>
          
          <div className="space-y-4">
            <div className="bg-white p-8 flex items-start gap-5 shadow-sm">
              <div className="w-12 h-12 flex-shrink-0 bg-orange-50 rounded-full flex items-center justify-center">
                <img src={Ou1} alt="img" className="w-6 h-6 object-contain" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1d2130] mb-2">On Time Delivery</h3>
                <p className="text-gray-500 text-sm">
                  Through True Rich Attended does no end it his mother since real had half every him.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 flex items-start gap-5 shadow-sm">
              <div className="w-12 h-12 flex-shrink-0 bg-orange-50 rounded-full flex items-center justify-center">
                <img src={Ou2} alt="img" className="w-6 h-6 object-contain" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1d2130] mb-2">Best Quality</h3>
                <p className="text-gray-500 text-sm">
                  Through True Rich Attended does no end it his mother since real had half every him.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 flex items-start gap-5 shadow-sm">
              <div className="w-12 h-12 flex-shrink-0 bg-orange-50 rounded-full flex items-center justify-center">
                <img src={Ou3} alt="img" className="w-6 h-6 object-contain" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1d2130] mb-2">Support Assist</h3>
                <p className="text-gray-500 text-sm">
                  Through True Rich Attended does no end it his mother since real had half every him.
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full mt-0 h-1">
            <div className="w-1/3 bg-orange-400"></div>
            <div className="w-1/3 bg-orange-200"></div>
            <div className="w-1/3 bg-blue-600"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Ourexpertise;