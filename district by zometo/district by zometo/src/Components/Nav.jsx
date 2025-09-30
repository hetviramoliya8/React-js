import React from "react";

export default function Nav() {
  return (
      <div className="flex items-center justify-between px-4 h-[75px] w-full fixed bg-white z-99">
        <div className="flex items-center">
          <img src="logo.jpg" alt="" className="w-30" />
          <div className="flex ml-3 items-center border-l-1 border-l-[#e8eaed]">
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="25" height="25" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><g fill="none"><path d="M12 2a8 8 0 0 1 8 8c0 6.5-8 12-8 12s-8-5.5-8-12a8 8 0 0 1 8-8m0 5a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clipRule="evenodd" /><path stroke="#6444e4" strokeWidth="2" d="M20 10c0 6.5-8 12-8 12s-8-5.5-8-12a8 8 0 1 1 16 0Z" /><path stroke="#6444e4" strokeWidth="2" d="M15 10a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" /></g></svg>
            <div className="ml-2 leading-5">
              <h1 className="text-[#131316] text-[15px] font-bold">Mavdi</h1>
              <h1 className="text-[#545459] font-[500]">Rajkot</h1>
            </div>
          </div>
        </div>
        <ul className="flex text-md font-[500] gap-7 text-[#545459] mr-30">
          <li><a href="" className="text-black bg-[#eae5ff] px-2.5 pb-2 py-1.5 rounded-full">For you</a></li>
          <li><a href="">Dining</a></li>
          <li><a href="">Events</a></li>
          <li><a href="">Movies</a></li>
          <li><a href="">Activites</a></li>
        </ul>
        <div className="flex justify-between gap-5">
          <div className="flex items-center w-90 px-2 gap-2 py-2 border-1 border-gray-300 rounded-[13px]" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><path fill="#6444e4" d="M10.77 18.3a7.53 7.53 0 1 1 7.53-7.53a7.53 7.53 0 0 1-7.53 7.53m0-13.55a6 6 0 1 0 6 6a6 6 0 0 0-6-6" /><path fill="#6444e4" d="M20 20.75a.74.74 0 0 1-.53-.22l-4.13-4.13a.75.75 0 0 1 1.06-1.06l4.13 4.13a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22" /></svg>
            <input type="search" className="inp w-[95%] outline-none" placeholder="Search for events, movies and restorents" />
          </div>
          <div className="bg-[#d1d5db] px-2 py-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><g fill="none" stroke="#fff" strokeWidth="1.5"><path strokeLinejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" /><circle cx="12" cy="7" r="3" /></g></svg>
          </div>
        </div>
      </div>
  );
}
