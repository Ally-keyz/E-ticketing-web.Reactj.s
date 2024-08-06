import React from 'react'
import CustomInput from '../components/customInput'
import { useState } from 'react'
import bus from '../assets/bus.png'


function AgentBooking() {
    const options = ['Horzon', 'Volcano', 'Ritco'];
    const [orgin ,setOrgin] = useState('')
    const [destination , setDestination] = useState('')
    const [agecny , setAgency] = useState('')
    const orgins = ['Kigali']
    


  return (
    <>
   
   <div className="sm:flex sm:flex-wrap sm:justify-around p-10 w-full mt-2 h-[1050px] sm:h-[590px] bg-blue-200 rounded-md shadow-sm shadow-gray-200">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <div className="flex justify-center text-[20px] text-white font-bold mb-2">Book ticket</div>
          <div className="w-full sm:w-[450px] rounded-md h-[500px] bg-white scrollbar-custom">
            <div className="flex h-10 w-full sm:w-[410px] ml-0 sm:ml-9 justify-around">
            <div className="pr-5">
                <div className="absolute mr-10 mt-4 ">
                    <img src={bus} className='w-10 h-10' alt="" />
                </div>
            <div className=" mt-5 ml-20 mb-10 text-[20px]  text-blue-400 font-bold">ETIX</div>
     <CustomInput options={orgins}  placeHolders={'Passenger Origin'} /> 
     <CustomInput options={orgins} placeHolders={'Passenger Destination'} />   
     
      
       <div  className="text-center button text-white bg-blue-400 pt-1 mt-16    text-[11px] font-semibold rounded cursor-pointer border transition-colors duration-500 hover:bg-blue-200 border-opacity-5  w-52 h-7 ">
                Find Ticket
            </div>
            </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <div className="flex justify-center text-[20px] text-white mb-2 font-bold">Search results</div>
          <div className="w-full sm:w-[420px] rounded-md h-96 bg-white scrollbar-custom">
            <div className="flex h-10 w-full sm:w-[385px] ml-0 sm:ml-9 pt-3 text-gray-900 text-[10px] font-bold justify-center border-b border-gray-400">
               Tickets Available
            </div>
            <div className="w-72 h-28 shadow-md shadow-gray-200 bg-blue-100 mt-5 ml-10 rounded">
                <div className="p-5 flex justify-between">
                    <div className="">
                    <div className="text-[12px] text-gray-800 font-semibold">Origin:</div>
                    <div className="text-[12px] text-gray-800 font-semibold">Destination:</div>
                    <div className="text-[12px] text-gray-800 font-semibold">Departure Time:</div>
                    <div className="text-[12px] text-gray-800 font-semibold">Cost:</div>
                    </div>
                    <div  className="text-center button text-white bg-blue-400 pt-2 mt-14    text-[8px] font-semibold rounded cursor-pointer border transition-colors duration-500 hover:bg-blue-200 border-opacity-5  w-20 h-7 ">
                Print Ticket
            </div>
                </div>
            </div>
          </div>
        </div>
        </div>
    
    </>
  )
}

export default AgentBooking