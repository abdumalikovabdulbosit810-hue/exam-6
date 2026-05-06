import React from 'react';
import Shapes from "../../assets/Shapes.svg";
import Clear from "../../assets/Clear.png";
import Clear1 from "../../assets/Clear1.png";
import Clear2 from "../../assets/Clear2.png";

const About = () => {
  return (
    <section className="relative w-full bg-white py-24 px-8 overflow-hidden font-sans">
      <div className="absolute top-20 left-12 w-8 h-8 bg-orange-200" />
      <div className="absolute top-24 right-12 md:right-24">
        <img src={Shapes}  alt="Shapes logo"  className="w-12 h-auto" />
      </div>
      <div className="max-w-6xl mx-auto mt-12">
        <span className="text-xs font-bold text-gray-500 uppercase">
          COMPANY
        </span>

        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-[#2D3142] leading-[1.1] max-w-3xl">
          Award-winning Company <br />
          seen and used by millions <br />
          around the world.
        </h1>

        <p className="mt-8 text-gray-500 text-lg max-w-2xl leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable 
          content of a page when looking at its layout. The Maker is a decentralized.
        </p>
      </div>
      <div>
<div className="w-full py-10">
  <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">

    <div className="w-full h-64 overflow-hidden">
      <img
        src={Clear}
        alt="rasm1"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="w-full h-64 overflow-hidden ">
      <img
        src={Clear1}
        alt="rasm2"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="relative w-full h-64 overflow-hidden">

      <img
        src={Clear2}
        alt="rasm 3"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</div>
</div>

    </section>
    
  );
};

export default About;