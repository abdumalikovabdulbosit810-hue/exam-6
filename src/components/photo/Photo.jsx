import React from "react";
import { useNavigate } from "react-router-dom";
import { teamData } from "../../api/teamApi";
const Photo = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-[80px]">
      <div className="max-w-[1280px] mx-auto px-5">
        <p className="text-[12px] uppercase tracking-[3px] text-[#232536] font-semibold mb-4">
          Meet our team
        </p>

        <h2 className="text-[48px] leading-[58px] font-bold text-[#232536] max-w-[520px] mb-6">
          Teamwork is the only way we work
        </h2>

        <p className="text-[#5D5F6D] text-[14px] leading-[22px] max-w-[520px] mb-12">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable.
        </p>

        <div className="grid grid-cols-4">
          {teamData.map((person, index) => (
            <div
              key={person.id}
              onClick={() => navigate(`/team/${person.id}`)}
              className="relative h-[320px] cursor-pointer overflow-hidden group"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-full object-cover"
              />

              {index === 4 && (
                <div className="absolute inset-0 bg-[#232536]/90 flex flex-col justify-end p-8">
                  <h3 className="text-white text-[20px] font-bold mb-2">
                    {person.name}
                  </h3>
                  <p className="text-white/70 text-[14px] mb-4">
                    {person.job}
                  </p>

                  <div className="flex gap-4 text-white text-[14px]">
                    <span>f</span>
                    <span>t</span>
                    <span>in</span>
                  </div>
                </div>
              )}

              {index !== 4 && (
                <div className="absolute inset-0 bg-[#232536]/80 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-8">
                  <h3 className="text-white text-[20px] font-bold mb-2">
                    {person.name}
                  </h3>
                  <p className="text-white/70 text-[14px]">{person.job}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photo;