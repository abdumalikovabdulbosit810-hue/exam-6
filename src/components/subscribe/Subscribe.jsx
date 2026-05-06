import React from 'react';

const Subscribe = () => {
  return (
    <section className="bg-[#666DFF] py-20 px-10 md:px-20 relative overflow-hidden font-sans">
      
      <div className="absolute top-0 left-0 w-24 h-24">
        <img 
          src="/path-to-your-shape-left.png" 
          className="w-full h-full object-contain opacity-80" 
          alt="decoration-left"
        />
      </div>

      <div className="absolute top-0 right-0 h-full w-12">
        <img 
          src="/path-to-your-shape-right.png" 
          className="w-full h-full object-cover opacity-90" 
          alt="decoration-right"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 gap-10">
        
        <div className="max-w-xl">
          <h4 className="text-white uppercase tracking-[0.2em] text-[12px] font-medium mb-6 opacity-90">
            Newsletter
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Subscribe our News Letter <br className="hidden md:block" /> to get Latest Updates.
          </h2>
        </div>

        <div className="w-full max-w-md">
          <div className="bg-white p-2 flex items-center shadow-lg">
            <input 
              type="email" 
              placeholder="YourEmail@example.com" 
              className="w-full px-6 py-4 outline-none text-gray-500 text-lg"
            />
            <button className="bg-[#666DFF] text-white px-8 py-4 font-semibold hover:bg-opacity-90 transition-all">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Subscribe;