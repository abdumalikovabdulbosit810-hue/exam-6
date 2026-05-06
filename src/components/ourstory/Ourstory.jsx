import React from 'react';

const Ourstory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12 font-sans">
      
      <div className="w-full ">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-4 bg-indigo-600"></div>
          <span className="text-sm font-bold uppercase tracking-wider text-gray-800">
            Our Story 👇
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          From Startups to Titans of Industry
        </h2>
        
        <p className="text-gray-600 leading-relaxed text-lg">
          Through True Rich Attended does no end it his mother since
          favourable real had half every him case in packages enquire we up
          ecstatic unsatiable saw his giving Remain expense of gay produce
          excited perceived do an a china mean its so ye when in explained
          Hearts am next over match mr partiality not shoud latter thus as out
          no passed forming middleton exercise up
        </p>
      </div>

      <div className="w-full lg:w-1/2 bg-[#FFEAD5] p-10  grid grid-cols-2 gap-y-12 gap-x-8">
        
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-gray-900 mb-2">1560+</span>
          <div className="flex mb-2">
            <div className="h-1.5 w-3 bg-blue-600"></div>
            <div className="h-1.5 w-16 bg-orange-400 opacity-60"></div>
          </div>
          <span className="text-gray-800 font-semibold">Project Delivered</span>
        </div>

        <div className="flex flex-col">
          <span className="text-4xl font-bold text-gray-900 mb-2">100+</span>
          <div className="flex mb-2">
            <div className="h-1.5 w-3 bg-blue-600"></div>
            <div className="h-1.5 w-16 bg-orange-400 opacity-60"></div>
          </div>
          <span className="text-gray-800 font-semibold">Professional</span>
        </div>

        <div className="flex flex-col">
          <span className="text-4xl font-bold text-gray-900 mb-2">950+</span>
          <div className="flex mb-2">
            <div className="h-1.5 w-3 bg-blue-600"></div>
            <div className="h-1.5 w-16 bg-orange-400 opacity-60"></div>
          </div>
          <span className="text-gray-800 font-semibold">Happy Client</span>
        </div>

        <div className="flex flex-col">
          <span className="text-4xl font-bold text-gray-900 mb-2">10 yrs</span>
          <div className="flex mb-2">
            <div className="h-1.5 w-3 bg-blue-600"></div>
            <div className="h-1.5 w-16 bg-orange-400 opacity-60"></div>
          </div>
          <span className="text-gray-800 font-semibold">Experience</span>
        </div>

      </div>
    </section>
  );
};

export default Ourstory;