import React from 'react'
import add from '../assets/add_10337420.png'
import upload from '../assets/upload-1-17-32.png'
import { useState } from 'react'
import edit from '../assets/edit-button_6325975.png';
import remove from '../assets/trash_5949807.png';
import Modal from '../components/Modal'
import EditableInput from '../components/EditableInput'

function Schedule() {
    const [open , setOpen] = useState(false)
    const closeModal2 = () => setOpen(false);
    const openModal2 = ()=> setOpen(true)
     
    const [driverName ,setDriverName] = useState('')
    const [carPlate,setCarPlate] = useState('')
    const [orgin,setOrgin] = useState('')
    const [destination,setDestination]=useState('')
    const [travelTime,setTravelTime] =useState('')
    const[seats,setSeats] =useState('')
    const [cost,setCost] = useState('')  

  return (
    <>
      <div className="flex justify-end">
    <div className="flex  mb-1 mr-20 button cursor-pointer ">
          <img src={upload} className='w-5 h-5' alt="Add" />
          <div className="text-[10px] mt-1 ml-2 font-semibold text-blue-300">Upload Schedule</div>
        </div>
        <div onClick={openModal2} className="flex justify-end mb-1 mr-24 button cursor-pointer ">
          <img src={add} className='w-5 h-5' alt="Add" />
          <div className="text-[10px] mt-1 ml-2 font-semibold text-blue-300">Add Schedule</div>
        </div>
        </div>
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
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Edit</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Remove</div>
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
            <div className="text-gray-500 text-[12px] font-semibold mt-2">
            <img src={edit} className='w-7 h-7' alt="Edit" />
            </div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">
            <img src={remove} className='w-6 h-6' alt="Remove" />
            </div>
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
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Edit</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Remove</div>
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
            <div className="text-gray-500 text-[12px] font-semibold mt-2">
            <img src={edit} className='w-7 h-7' alt="Edit" />
            </div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">
            <img src={remove} className='w-6 h-6' alt="Remove" />
            </div>
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
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Edit</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Remove</div>
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
            <div className="text-gray-500 text-[12px] font-semibold mt-2">
            <img src={edit} className='w-7 h-7' alt="Edit" />
            </div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">
            <img src={remove} className='w-6 h-6' alt="Remove" />
            </div>
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
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Edit</div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">Remove</div>
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
            <div className="text-gray-500 text-[12px] font-semibold mt-2">
            <img src={edit} className='w-7 h-7' alt="Edit" />
            </div>
            <div className="text-gray-500 text-[12px] font-semibold mt-3">
            <img src={remove} className='w-6 h-6' alt="Remove" />
            </div>
            </div>
            </div>
        </div>
        <div className="relative top-[-25px] cursor-pointer flex w-full justify-end pr-3  text-[13px] text-blue-400 ">Next</div>
        </div>

    


      <Modal isOpen={open} onClose={closeModal2}>
      <div className="flex  bg-white rounded-lg shadow-xl  w-[420px] h-[450px]  ">
            <div className="flex justify-center items-center w-[150px]  bg-blue-400">
                <div className="text-[12px] font-bold text-white">Add Schedule</div>
            </div>
            <div className="pl-10">
            <div className=" mt-5 ml-20 mb-10 text-[20px]  text-blue-400 font-bold">ETIX</div>
            <input
        type="text"
        value={driverName}
        onChange={(e) => setDriverName(e.target.value)}
        className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Driver Name"
      />
            <input
        type="text"
        value={orgin}
        onChange={(e) => setOrgin(e.target.value)}
        className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Car Plate"
      />
           <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Driving Orgin"
      />
           <input
        type="text"
        value={travelTime}
        onChange={(e) => setTravelTime(e.target.value)}
        className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Driving Destination"
      />
           <input
        type='number'
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
        className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Seats Available"
      />
         <input
        type='text'
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Travel time"
      />
       <div  className="text-center text-white bg-blue-400 pt-1 mt-16    text-[11px] font-semibold rounded cursor-pointer border transition-colors duration-500 hover:bg-blue-200 border-opacity-5  w-52 h-7 ">
                Add schedule
            </div>
            </div>
            </div>
      </Modal>
    </>
  )
}

export default Schedule