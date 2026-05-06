import React from "react";

const Privacy = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-5">
        <h1 className="text-5xl font-bold mb-10">
          Privacy Policy
        </h1>

        <div className="bg-[#ECF8F9] p-20 relative">
          <p>
            Privacy page
          </p>

          <div className="absolute left-0 bottom-0 flex">
            <div className="w-[32px] h-[20px] bg-[#444CFC]"></div>
            <div className="w-[130px] h-[20px] bg-[#FFD3AF]"></div>
            <div className="w-[55px] h-[20px] bg-[#FFA155]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;