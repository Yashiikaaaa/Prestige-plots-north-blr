import React from 'react';
import image from '../assets/gallery/image7.png';
import Button from '../components/button/buttonMain';

// Overview Component
export const Overview = ({ contactmodal, setContactModal }) => {
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
          <span className="font-body font-bold text-xs md:text-lg ">
        
Prestige’s most anticipated plotted development is launching soon, strategically located just before the Airport Toll off Bellary Road.
          </span>
          <br />
          
            <span>
        <br />    <p>This project offers an unbeatable location, just 9 minutes from ITC Factory on Bellary Road, 15 minutes to Kempegowda International Airport, 20 minutes to Amazon (Horizon Business Park), and 30 minutes to Mall of Asia. It’s nestled amidst premium resorts and greenery, ensuring a tranquil, upscale living experience.
<p/>
            <br/>
            <p>Spanning 29 acres, the development features over 200 premium plots with sizes ranging from 2,400 – 4,000 sqft, plus custom sizes available. With the trusted Prestige brand backing this project, you can be assured of long-term value. It’s ideal for building luxury villas in a gated community, and offers excellent potential for appreciation. </p>
</p>

            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => setContactModal(!contactmodal)} // Toggle contact modal on button click
              />
          
        </div>

        {/* Image and Download Button Section */}
        <div className="hidden md:flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full h-auto flex justify-center border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Prestige Autumn Leaves"
              className=" w-[420px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
