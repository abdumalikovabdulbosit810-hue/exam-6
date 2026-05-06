import React from 'react';
import { useNavigate } from 'react-router-dom';
import Pages from '../assets/Pages.svg';
import Layout from '../assets/Layout.png';
import Shapes1 from '../assets/Shapes1.svg';
import Shapes2 from '../assets/Shapes2.svg';
import DeveloperDetails from '../components/DeveloperDetails/DeveloperDetails';

export const jobs = [
  { id: 1, t: "Full Stack Developer", l: "Bengaluru · Full Time", s: "$10K - $18K · No equity" },
  { id: 2, t: "Testing Engineer", l: "Remote · Full Time", s: "$08K - $10K · No equity" },
  { id: 3, t: "Hr Manager", l: "Mumbai · Fulltime", s: "$08K - $10K · 4 to 5 Yrs Exp" },
  { id: 4, t: "Product Designer", l: "Mumbai · Fulltime", s: "$08K - $10K · 4 to 5 Yrs Exp" },
  { id: 5, t: "Wordpress Developer", l: "Mumbai · Full Time", s: "$08K - $10K · 4 to 5 Yrs Exp" },
  { id: 6, t: "Jr. QA Tester", l: "California, USA · Full Time", s: "$14K - $23K · No equity" },
  { id: 7, t: "Sr. UX Designer", l: "California, USA · Full Time", s: "$14K - $23K · No equity" },
  { id: 8, t: "Social Media Manager", l: "Kolkata, India · Fulltime", s: "$5K - $10K · Fresher" },
  { id: 9, t: "Golang Developer", l: "Mumbai · Fulltime", s: "$08K - $10K · 4 to 5 Yrs Exp" },
];

const perks = [
  { unvon: "Covid-19 insurance", emoji: "😷" },
  { unvon: "Flexible working time", emoji: "⏰" },
  { unvon: "Work from home", emoji: "🏠" },
  { unvon: "Annual retreats", emoji: "🎉" },
  { unvon: "Learning stipend", emoji: "📚" },
  { unvon: "Gym membership", emoji: "💪" },
];

const Career = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white font-sans relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 py-20 relative">
          <div className="absolute top-4 right-4 w-8 h-8">
            <img src={Pages} alt="Logo" className="w-full h-full object-contain" />
          </div>

          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-16">
              <h4 className="text-gray-500 uppercase tracking-[0.2em] text-[12px] font-bold mb-6">
                CAREER AT FINSWEET
              </h4>

              <h2 className="text-5xl font-bold text-[#1d2130] leading-tight mb-8 max-w-3xl mx-auto">
                We hired people who are Always Passionate about what they do
              </h2>

              <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
                Through True Rich Attended does no end it his mother since real had half
                every him case in packages enquire we up ecstatic unsatiable saw.
              </p>
            </div>

            <div className="relative mb-16">
              <div className="w-full h-auto flex justify-center items-center">
                <img src={Layout} alt="Careers Background" className="max-w-full h-auto object-contain" />
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-lg font-bold text-[#1d2130] cursor-pointer">
                See Our open positions
              </h5>
              <div className="flex justify-center">
                <span className="text-2xl">👇</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#eef8f9] font-sans">
        <div className="max-w-[1280px] mx-auto px-5 py-20">
          <div className="grid grid-cols-3 gap-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-12 shadow-sm flex flex-col justify-between items-start min-h-[280px]"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#1d2130] mb-4">
                    {job.t}
                  </h3>

                  <div className="text-gray-500 space-y-1 mb-10">
                    <p className="text-[14px] leading-6">{job.l}</p>
                    <p className="text-[14px] leading-6">{job.s}</p>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/career/${job.id}`)}
                  className="flex items-center gap-2 text-blue-600 font-bold text-[16px] group transition-all"
                >
                  Apply Now
                  <span className="text-2xl transition-transform group-hover:translate-x-2">⟶</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#fafafb] font-sans">
        <div className="max-w-[1200px] mx-auto px-5 py-20">
          <div className="mb-16">
            <h4 className="text-gray-900 uppercase tracking-widest text-[12px] font-bold mb-4">
              Our Work & Culture
            </h4>

            <h2 className="text-4xl font-bold text-[#1d2130] mb-6 max-w-lg">
              Come and join a team of highly skilled professionals.
            </h2>

            <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
              Through True Rich Attended does no end it his mother since real had half
              every him case in packages enquire we up ecstatic unsatiable saw his giving
              Remain expense you position concluded.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="bg-white p-10 shadow-sm border border-gray-50">
                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-xl">
                  {perk.emoji}
                </div>

                <h3 className="text-xl font-bold text-[#1d2130] mb-3">
                  {perk.unvon}
                </h3>

                <p className="text-gray-500 text-sm leading-6">
                  Through True Rich Attended does no end it his mother since real had halfdoes no end it
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-20 font-sans">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-[#666DFF] relative overflow-hidden h-[333px] px-[95px] flex items-center">
            <div className="absolute top-0 left-0 w-[96px] h-[96px]">
              <img src={Shapes1} className="w-full h-full object-contain" alt="decoration-left" />
            </div>

            <div className="absolute top-0 right-0 h-full w-[24px]">
              <img src={Shapes2} className="w-full h-full object-cover" alt="decoration-right" />
            </div>

            <div className="w-full flex items-center justify-between relative z-10">
              <div>
                <h4 className="text-white uppercase tracking-[4px] text-[12px] font-medium mb-[13px]">
                  Newsletter
                </h4>

                <h2 className="text-[36px] leading-[54px] font-bold text-white max-w-[500px]">
                  Subscribe our News Letter <br />
                  to get Latest Updates.
                </h2>
              </div>

              <div className="w-[454px] h-[64px] bg-white flex items-center">
                <input
                  type="email"
                  placeholder="Paresh@Pixeto.com"
                  className="w-full h-full px-[29px] outline-none text-[#A7A8AF] text-[14px]"
                />
              </div>
            </div>
          </div>
        </div>
        <DeveloperDetails />
      </div>
    </>
  );
};

export default Career;