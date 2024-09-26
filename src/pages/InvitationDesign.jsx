import React from 'react';
import './App.css';  // You can import your styles here if needed

const InvitationDesign = () => {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto bg-white">
      {/* Navbar */}
      <nav className="relative w-full h-20 bg-white shadow-lg">
        <div className="absolute top-2 left-14 text-2xl font-normal font-istokWeb text-black">Logo</div>
        <ul className="flex justify-center items-center space-x-10 h-full">
          <li className="text-xl font-normal font-istokWeb text-black">Home</li>
          <li className="text-xl font-normal font-istokWeb text-black">Product</li>
          <li className="text-xl font-normal font-istokWeb text-black">About</li>
        </ul>
        <div className="absolute top-0 right-10 h-full flex justify-center items-center">
          <button className="flex justify-center items-center p-4 bg-black text-white rounded-full">Button</button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="relative w-full h-[610px] mt-20 bg-white">
        <div className="absolute w-full h-full bg-[rgba(255,242,242,0.71)]"></div>
        <div className="absolute w-[984px] h-[923px] top-[-157px] right-[83px] rotate-[114deg] bg-gradient-to-br from-[#FFF2F2] to-[#FFFFFF]"></div>
        <div className="absolute w-[570px] h-[533px] top-[-179px] left-[-118px] bg-gradient-to-br from-[#FFCECE] via-[#FEDCDC] to-[#FFFFFF]"></div>
        <div className="absolute text-[50px] font-bold font-montserrat text-black left-[383px] top-[257px]">Wedding Invitation Presets</div>
        <div className="absolute text-[38px] font-medium font-montserrat text-black text-center left-[269px] top-[384px] w-[978px]">With these presets, you can choose a theme that suits your preference</div>
      </div>
      
      {/* Sections */}
      <section className="relative w-full h-[3702px] mt-20 bg-white">
        <div className="absolute w-full h-full bg-[#FFF2F2] rounded-md"></div>
        <div className="absolute w-[984px] h-[923px] top-[-93px] right-[674px] rotate-[90deg] bg-gradient-to-br from-[#FFF2F2] to-[#FFFFFF]"></div>
        <div className="absolute w-[570px] h-[533px] top-[431px] right-[630px] rotate-[-179deg] bg-gradient-to-br from-[#FFCECE] via-[#FEDCDC] to-[#FFFFFF]"></div>
        <div className="absolute text-[50px] font-bold font-montserrat text-black left-[465px] top-[59px]">See What’s Popular</div>
        {/* Rectangles */}
        <div className="absolute w-[234px] h-[101px] top-[350px] left-[1097px] bg-white shadow-md rounded-md"></div>
        <div className="absolute w-[234px] h-[101px] top-[350px] left-[777px] bg-white shadow-md rounded-md"></div>
        <div className="absolute w-[234px] h-[101px] top-[350px] left-[429px] bg-white shadow-md rounded-md"></div>
        <div className="absolute w-[234px] h-[101px] top-[350px] left-[83px] bg-white shadow-md rounded-md"></div>
        <div className="absolute text-[30px] font-medium font-montserrat text-black left-[1142px] top-[382px]">Premium</div>
        <div className="absolute text-[30px] font-medium font-montserrat text-black left-[826px] top-[382px]">Eksklusif</div>
        <div className="absolute text-[30px] font-medium font-montserrat text-black left-[146px] top-[382px]">Semua</div>
        <div className="absolute text-[30px] font-medium font-montserrat text-black left-[493px] top-[382px]">Basic</div>
      </section>
      
      {/* Other Sections */}
      <section className="relative w-full h-[844px] mt-20 bg-[#FFF2F2] rounded-md">
        <div className="absolute w-[984px] h-[923px] top-[-93px] right-[674px] rotate-[90deg] bg-gradient-to-br from-[#FFF2F2] to-[#FFFFFF]"></div>
        <div className="absolute w-[570px] h-[533px] top-[431px] right-[630px] rotate-[-179deg] bg-gradient-to-br from-[#FFCECE] via-[#FEDCDC] to-[#FFFFFF]"></div>
        {/* Designs */}
        <div className="absolute w-[1330px] h-[297px] top-[401px] left-[55px]">
          <div className="relative w-[400px] h-[260px] border-4 border-[#5F0255] rounded-md">
            <div className="absolute w-[294px] h-[184px] top-[69px] left-[56px]" style={{ backgroundImage: "url('7783a1d0-f32c-11ee-9c9e-ebdb25c4c02a')" }}></div>
          </div>
          <div className="relative w-[400px] h-[260px] border-4 border-[#5F0255] rounded-md left-[465px] top-0">
            <div className="absolute w-[294px] h-[184px] top-[69px] left-[56px]" style={{ backgroundImage: "url('7783a1d0-f32c-11ee-9c9e-ebdb25c4c02a')" }}></div>
          </div>
          <div className="relative w-[400px] h-[260px] border-4 border-[#5F0255] rounded-md left-[930px] top-0">
            <div className="absolute w-[294px] h-[184px] top-[69px] left-[56px]" style={{ backgroundImage: "url('7783a1d0-f32c-11ee-9c9e-ebdb25c4c02a')" }}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvitationDesign;
