import React from 'react'

function AgentSchedule() {
  return (
    <>
       <div className='flex  mt-5'>
        <div className="flex">
          <div className="h-4 w-1 bg-blue-400"></div>
          <div className="text-[10px] ml-1 text-blue-400 font-semibold">
            Todays schedules
          </div>
        </div>
      </div>
      <div className="flex mt-2 justify-center text-blue-400 text-[13px] font-semibold">
        Northern province travels
      </div>
      <div className="sm:flex sm:flex-wrap sm:justify-around p-10 w-full mt-2  h-[490px] bg-blue-200 rounded-md shadow-sm shadow-gray-200">
      <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <div className="w-full sm:w-[1000px] rounded-md h-96 bg-white scrollbar-custom">
            <div className="flex h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-400">
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Driver Name</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Car Plate</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Orgin</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Destination</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Seatings Available</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Travel Hour</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Cost</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Book</div>
 
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
            <div className="text-white h-5 w-9 rounded button cursor-pointer flex items-center justify-center bg-blue-400 text-[8px] font-semibold mt-3">Book</div>
            </div>
            </div>
        </div>
        <div className="relative top-[-25px] cursor-pointer flex w-full justify-end pr-3  text-[13px] text-blue-400 ">Next</div>
        </div>

        <div className="flex mt-7 justify-center text-blue-400 text-[13px] font-semibold">
        Southern province travels
      </div>
      <div className="sm:flex sm:flex-wrap sm:justify-around p-10 w-full mt-2  h-[490px] bg-blue-200 rounded-md shadow-sm shadow-gray-200">
      <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <div className="w-full sm:w-[1000px] rounded-md h-96 bg-white scrollbar-custom">
            <div className="flex h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-400">
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Driver Name</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Car Plate</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Orgin</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Destination</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Seatings Available</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Travel Hour</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Cost</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Book</div>
        
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
            <div className="text-white h-5 w-9 rounded button cursor-pointer flex items-center justify-center bg-blue-400 text-[9px] font-semibold mt-3">Book</div>
            </div>
            </div>
        </div>
        <div className="relative top-[-25px] cursor-pointer flex w-full justify-end pr-3  text-[13px] text-blue-400 ">Next</div>
        </div>

        <div className="flex mt-7 justify-center text-blue-400 text-[13px] font-semibold">
        Eastern province travels
      </div>
      <div className="sm:flex sm:flex-wrap sm:justify-around p-10 w-full mt-2  h-[490px] bg-blue-100 rounded-md shadow-sm shadow-gray-200">
      <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <div className="w-full sm:w-[1000px] rounded-md h-96 bg-white scrollbar-custom">
            <div className="flex h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-400">
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Driver Name</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Car Plate</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Orgin</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Destination</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Seatings Available</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Travel Hour</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Cost</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Book</div>
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
            <div className="text-white h-5 w-9 rounded button cursor-pointer flex items-center justify-center bg-blue-400 text-[9px] font-semibold mt-3">Book</div>
            </div>
            </div>
        </div>
        <div className="relative top-[-25px] cursor-pointer flex w-full justify-end pr-3  text-[13px] text-blue-400 ">Next</div>
        </div>

        <div className="flex mt-7 justify-center text-blue-400 text-[13px] font-semibold">
        Western province travels
      </div>
      <div className="sm:flex sm:flex-wrap sm:justify-around p-10 w-full mt-2  h-[490px] bg-blue-200 rounded-md shadow-sm shadow-gray-200">
      <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <div className="w-full sm:w-[1000px] rounded-md h-96 bg-white scrollbar-custom">
            <div className="flex  h-10 w-full sm:w-[960px] ml-0 sm:ml-9 justify-around border-b border-gray-400">
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Driver Name</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Car Plate</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Orgin</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Destination</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Seatings Available</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Travel Hour</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Cost</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Book</div>
            
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
            <div className="text-white h-5 w-9 rounded button cursor-pointer flex items-center justify-center bg-blue-400 text-[9px] font-semibold mt-3">Book</div>
            </div>
            </div>
        </div>
        <div className="relative top-[-25px] cursor-pointer flex w-full justify-end pr-3  text-[13px] text-blue-400 ">Next</div>
        </div>
    </>
  )
}

export default AgentSchedule