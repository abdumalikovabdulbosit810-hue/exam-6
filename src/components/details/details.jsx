import React from "react";
import { useParams } from "react-router-dom";
import { jobs } from "../../pages/Career";

const DeveloperDetails = () => {
  const { id } = useParams();

  const job = jobs.find((item) => item.id === Number(id));

  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT */}
        <div className="relative px-[14px] pt-[30px] pb-[18px] lg:h-[263px]">
          <p className="text-[12px] font-semibold tracking-[5px] text-[#232536] uppercase mb-[24px]">
            Career at Ether
          </p>

          <h1 className="text-[40px] leading-[48px] font-bold text-[#232536] mb-[16px]">
            {job?.t}
          </h1>

          <p className="max-w-[430px] text-[15px] leading-[21px] text-[#5D5F6D] mb-[34px]">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages.
          </p>

          <button className="relative w-[149px] h-[52px] bg-[#444CFC] text-white text-[16px] flex items-center justify-center gap-[14px]">
            <span className="absolute left-0 top-0 flex">
              <span className="w-[14px] h-[14px] bg-[#FFA155]"></span>
              <span className="w-[8px] h-[8px] bg-[#666DFF]"></span>
            </span>

            Apply Now
            <span className="text-[28px] leading-none">→</span>
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative bg-[#FFE0C7] h-[263px] px-[65px] pt-[68px]">
          <div className="absolute right-0 top-0 flex">
            <div className="w-[13px] h-[11px] bg-[#666DFF]"></div>
            <div>
              <div className="w-[28px] h-[28px] bg-[#FFA155]"></div>
              <div className="w-[17px] h-[16px] ml-[11px] bg-[#666DFF]"></div>
            </div>
          </div>

          <h2 className="text-[22px] leading-[28px] font-bold text-[#232536] mb-[20px]">
            Job Description
          </h2>

          <div className="space-y-[14px] text-[14px] leading-[20px] text-[#000000]">
            <p>{job?.l}</p>
            <p>Department: Product Engineering</p>
            <p>{job?.s}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperDetails;