import React from 'react'
import history from '../assets/history.png'
import download from '../assets/download-2-32.png'
import { useState } from 'react';

function Reporting() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDownload = () => {
    setIsAnimating(true);
    // Simulate a download process
    setTimeout(() => {
      setIsAnimating(false);
      alert('Download Complete');
    }, 3000); // Replace with actual download logic
  };
  return (
    <>
      <div className='flex  mt-5'>
        <div className="flex">
          <div className="h-4 w-1 bg-blue-400"></div>
          <div className="text-[10px] ml-1 text-blue-400 font-semibold">
            Daily reports
          </div>
        </div>
      </div>
      <div className="flex mt-2 justify-center text-blue-400 text-[13px] font-semibold">
        Northern province travels
      </div>
      <div className="flex justify-between border-b border-gray-300">
        <div className="flex">
        <img src={history} className='w-6 h-6 mt-5' alt="" />
        <div className="text-blue-400 text-[10px] font-bold mt-6 ml-2">02/08/2024 Report</div>
        </div>
       
        <div className="relative">
      <button
        onClick={handleDownload}
        className="flex"
        disabled={isAnimating}
      >
        <img src={download} className='w-5 h-5 mt-4' alt="" />
        <div className="text-blue-400 text-[10px] font-bold mt-6 ml-2">Download Report</div>
      </button>
      {isAnimating && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="animate-rise bg-blue-500 w-3 h-3 rounded-full"></div>
        </div>
      )}
    </div>
       
      </div>
      <div className="sm:flex sm:flex-wrap sm:justify-around p-10 w-full mt-2 h-[1000px] sm:h-[490px] bg-blue-100 rounded-md shadow-sm shadow-gray-200">
      <div className="w-full sm:w-[1000px] rounded-md h-96 bg-white scrollbar-custom">
            <div className="flex h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-400">
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Driver Name</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Car Plate</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Orgin</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Destination</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Seatings Available</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Travel Hour</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Cost</div>
            
            </div>
            {/*  This is the card where you are going to map the whole data  */}
            <div className="flex hover:bg-blue-50 transition-colors duration-500 h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-200">
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Ashrafu Tuyubahe</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">MBA23</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Kigali</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Huye</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">24/30</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Travel Hour</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Cost</div>
            </div>
            </div>
        </div>
        <div className="relative top-[-25px] cursor-pointer flex w-full justify-end pr-3  text-[13px] text-blue-400 ">Next</div>
        <div className="flex mt-2 justify-center text-blue-400 text-[13px] font-semibold">
        Northern province travels
      </div>
      <div className="flex justify-between border-b border-gray-300">
        <div className="flex">
        <img src={history} className='w-6 h-6 mt-5' alt="" />
        <div className="text-blue-400 text-[10px] font-bold mt-6 ml-2">02/08/2024 Report</div>
        </div>
       
        <div className="relative">
      <button
        onClick={handleDownload}
        className="flex"
        disabled={isAnimating}
      >
        <img src={download} className='w-5 h-5 mt-4' alt="" />
        <div className="text-blue-400 text-[10px] font-bold mt-6 ml-2">Download Report</div>
      </button>
      {isAnimating && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="animate-rise bg-blue-500 w-3 h-3 rounded-full"></div>
        </div>
      )}
    </div>
       
      </div>
      <div className="sm:flex sm:flex-wrap sm:justify-around p-10 w-full mt-2 h-[1000px] sm:h-[490px] bg-blue-100 rounded-md shadow-sm shadow-gray-200">
      <div className="w-full sm:w-[1000px] rounded-md h-96 bg-white scrollbar-custom">
            <div className="flex h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-400">
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Driver Name</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Car Plate</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Orgin</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Destination</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Seatings Available</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Travel Hour</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Cost</div>
            
            </div>
            {/*  This is the card where you are going to map the whole data  */}
            <div className="flex hover:bg-blue-50 transition-colors duration-500 h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-200">
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Ashrafu Tuyubahe</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">MBA23</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Kigali</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Huye</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">24/30</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Travel Hour</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Cost</div>
            </div>
            </div>
        </div>
        <div className="relative top-[-25px] cursor-pointer flex w-full justify-end pr-3  text-[13px] text-blue-400 ">Next</div>
        <div className="flex mt-2 justify-center text-blue-400 text-[13px] font-semibold">
        Southern province travels
      </div>
      <div className="flex justify-between border-b border-gray-300">
        <div className="flex">
        <img src={history} className='w-6 h-6 mt-5' alt="" />
        <div className="text-blue-400 text-[10px] font-bold mt-6 ml-2">02/08/2024 Report</div>
        </div>
       
        <div className="relative">
      <button
        onClick={handleDownload}
        className="flex"
        disabled={isAnimating}
      >
        <img src={download} className='w-5 h-5 mt-4' alt="" />
        <div className="text-blue-400 text-[10px] font-bold mt-6 ml-2">Download Report</div>
      </button>
      {isAnimating && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="animate-rise bg-blue-500 w-3 h-3 rounded-full"></div>
        </div>
      )}
    </div>
       
      </div>
      <div className="sm:flex sm:flex-wrap sm:justify-around p-10 w-full mt-2 h-[1000px] sm:h-[490px] bg-blue-100 rounded-md shadow-sm shadow-gray-200">
      <div className="w-full sm:w-[1000px] rounded-md h-96 bg-white scrollbar-custom">
            <div className="flex h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-400">
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Driver Name</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Car Plate</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Orgin</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Destination</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Seatings Available</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Travel Hour</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Cost</div>
            
            </div>
            {/*  This is the card where you are going to map the whole data  */}
            <div className="flex hover:bg-blue-50 transition-colors duration-500 h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-200">
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Ashrafu Tuyubahe</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">MBA23</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Kigali</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Huye</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">24/30</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Travel Hour</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Cost</div>
            </div>
            </div>
        </div>
        <div className="relative top-[-25px] cursor-pointer flex w-full justify-end pr-3  text-[13px] text-blue-400 ">Next</div>
        <div className="flex mt-2 justify-center text-blue-400 text-[13px] font-semibold">
        Eastern province travels
      </div>
      <div className="flex justify-between border-b border-gray-300">
        <div className="flex">
        <img src={history} className='w-6 h-6 mt-5' alt="" />
        <div className="text-blue-400 text-[10px] font-bold mt-6 ml-2">02/08/2024 Report</div>
        </div>
       
        <div className="relative">
      <button
        onClick={handleDownload}
        className="flex"
        disabled={isAnimating}
      >
        <img src={download} className='w-5 h-5 mt-4' alt="" />
        <div className="text-blue-400 text-[10px] font-bold mt-6 ml-2">Download Report</div>
      </button>
      {isAnimating && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="animate-rise bg-blue-500 w-3 h-3 rounded-full"></div>
        </div>
      )}
    </div>
       
      </div>
      <div className="sm:flex sm:flex-wrap sm:justify-around p-10 w-full mt-2 h-[1000px] sm:h-[490px] bg-blue-100 rounded-md shadow-sm shadow-gray-200">
      <div className="w-full sm:w-[1000px] rounded-md h-96 bg-white scrollbar-custom">
            <div className="flex h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-400">
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Driver Name</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Car Plate</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Orgin</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Destination</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Seatings Available</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Travel Hour</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Cost</div>
            
            </div>
            {/*  This is the card where you are going to map the whole data  */}
            <div className="flex hover:bg-blue-50 transition-colors duration-500 h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-200">
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Ashrafu Tuyubahe</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">MBA23</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Kigali</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Huye</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">24/30</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Travel Hour</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Cost</div>
            </div>
            </div>
        </div>
        <div className="relative top-[-25px] cursor-pointer flex w-full justify-end pr-3  text-[13px] text-blue-400 ">Next</div>
        <div className="flex mt-2 justify-center text-blue-400 text-[13px] font-semibold">
        Western province travels
      </div>
      <div className="flex justify-between border-b border-gray-300">
        <div className="flex">
        <img src={history} className='w-6 h-6 mt-5' alt="" />
        <div className="text-blue-400 text-[10px] font-bold mt-6 ml-2">02/08/2024 Report</div>
        </div>
       
        <div className="relative">
      <button
        onClick={handleDownload}
        className="flex"
        disabled={isAnimating}
      >
        <img src={download} className='w-5 h-5 mt-4' alt="" />
        <div className="text-blue-400 text-[10px] font-bold mt-6 ml-2">Download Report</div>
      </button>
      {isAnimating && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="animate-rise bg-blue-500 w-3 h-3 rounded-full"></div>
        </div>
      )}
    </div>
       
      </div>
      <div className="sm:flex sm:flex-wrap sm:justify-around p-10 w-full mt-2 h-[1000px] sm:h-[490px] bg-blue-100 rounded-md shadow-sm shadow-gray-200">
      <div className="w-full sm:w-[1000px] rounded-md h-96 bg-white scrollbar-custom">
            <div className="flex h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-400">
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Driver Name</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Car Plate</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Orgin</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Destination</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Seatings Available</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Travel Hour</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Cost</div>
            
            </div>
            {/*  This is the card where you are going to map the whole data  */}
            <div className="flex h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-200">
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Ashrafu Tuyubahe</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">MBA23</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Kigali</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Huye</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">24/30</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Travel Hour</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Cost</div>
            </div>
            </div>
        </div>
        <div className="relative top-[-25px] cursor-pointer flex w-full justify-end pr-3  text-[13px] text-blue-400 ">Next</div>
    </>
  )
}

export default Reporting