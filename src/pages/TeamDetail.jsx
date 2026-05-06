import React from "react";
import { useParams } from "react-router-dom";
import { teamData } from "../api/teamApi";

const TeamDetail = () => {
  const { id } = useParams();

  const person = teamData.find((item) => item.id === Number(id));

  if (!person) {
    return <h1 className="p-10 text-3xl font-bold">Person not found</h1>;
  }

  return (
    <section className="bg-white py-[80px]">
      <div className="max-w-[1280px] mx-auto px-5 grid grid-cols-2 gap-12 items-center">
        <div className="h-[500px] overflow-hidden">
          <img
            src={person.img}
            alt={person.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="text-[12px] uppercase tracking-[3px] text-[#232536] font-semibold mb-4">
            Team Member
          </p>

          <h1 className="text-[52px] font-bold text-[#232536] mb-4">
            {person.name}
          </h1>

          <h3 className="text-[24px] text-[#444CFC] font-semibold mb-6">
            {person.job}
          </h3>

          <p className="text-[#5D5F6D] text-[18px] leading-[32px] max-w-[600px]">
            {person.desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamDetail;