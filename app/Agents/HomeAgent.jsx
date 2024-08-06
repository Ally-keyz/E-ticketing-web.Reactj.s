import React from 'react'

function HomeAgent() {
  return (
    <>
    <div className="flex px-5 items-center text-[10px] w-full h-20 bg-blue-200 rounded-md shadow-sm shadow-gray-200">
      <img src="app/assets/pngegg (1).png" className='w-8 h-8' alt="" />
      <div className="text-[20px] ml-3 text-white font-bold">Agent Name</div>
    </div>
    <div className="flex flex-wrap justify-around p-10 w-full mt-5 h-96 bg-blue-200 rounded-md shadow-sm shadow-gray-200">
      <div className="w-40 h-40 flex button cursor-pointer justify-center rounded-md items-center bg-blue-400 mb-4 sm:mb-0">
        <div>
          <div className="flex justify-center mb-1">
            <img src="app/assets/add-32.png" width={20} height={20} alt="" />
          </div>
          <div className="text-white text-[10px] font-semibold">View Schedules</div>
        </div>
      </div>
      <div className="w-40 h-40 flex button cursor-pointer justify-center rounded-md items-center bg-blue-400 mb-4 sm:mb-0">
        <div>
          <div className="flex justify-center mb-1">
            <img src="app/assets/add-32.png" width={20} height={20} alt="" />
          </div>
          <div className="text-white text-[10px] font-semibold">Book tickets</div>
        </div>
      </div>
    </div>
  </>
  )
}

export default HomeAgent