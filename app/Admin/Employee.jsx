import React from 'react';
import { useState } from 'react';
import '../Admin/custom-scrollbar.css';
import edit from '../assets/edit-button_6325975.png';
import remove from '../assets/trash_5949807.png';
import '../Admin/ripple.css';
import add from '../assets/add_10337420.png';
import Modal from '../components/Modal';


function Employee() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [open , setOpen] = useState(false)
    const [open2,setOpen2]= useState(false)
    const  [name,setName] = useState('')
    const [email ,setEmail] = useState('')
    const [workStation,setWorkStation] = useState('')
    const [Password,setPassword] = useState('')
    const  [name2,setName2] = useState('')
    const [email2 ,setEmail2] = useState('')
    const [workStation2,setWorkStation2] = useState('')
    const [Password2,setPassword2] = useState('')
     
    const open2Modal = ()=> setOpen2(true)
    const close2Modal =()=> setOpen2(false)
    const openModal2 = ()=> setOpen(true)
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const closeModal2 = () => setOpen(false);
  return (
    <>
    <div className="flex justify-end">
    <div onClick={openModal} className="flex  mb-1 mr-20 button cursor-pointer ">
          <img src={add} className='w-5 h-5' alt="Add" />
          <div className="text-[10px] mt-1 ml-2 font-semibold text-blue-300">Add Agent</div>
        </div>
        <div onClick={openModal2} className="flex justify-end mb-1 mr-24 button cursor-pointer ">
          <img src={add} className='w-5 h-5' alt="Add" />
          <div className="text-[10px] mt-1 ml-2 font-semibold text-blue-300">Add Driver</div>
        </div>
        </div>
      <div className='flex  mt-5'>
        <div className="flex">
          <div className="h-4 w-1 bg-blue-400"></div>
          <div className="text-[10px] ml-1 text-blue-400 font-semibold">
            Agents and their work station
          </div>
        </div>
      </div>
      <div className="sm:flex sm:flex-wrap sm:justify-around p-10 w-full mt-2 h-[1000px] sm:h-[490px] bg-blue-200 rounded-md shadow-sm shadow-gray-200">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <div className="flex justify-center text-[20px] text-white font-bold mb-2">Agents</div>
          <div className="w-full sm:w-[450px] rounded-md h-96 bg-white scrollbar-custom">
            <div className="flex h-10 w-full sm:w-[410px] ml-0 sm:ml-9 justify-around border-b border-gray-400">
              <div className="text-gray-500 text-[12px] font-semibold mt-3">Name</div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">Work Station</div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">Remove</div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">Edit</div>
            </div>
            {/*  This is the card where you are going to map the whole data  */}
            <div className="flex hover:bg-blue-50 transition-colors duration-500 h-10 w-full sm:w-[410px] ml-0 sm:ml-9 justify-around border-b border-gray-200">
              <div className="text-gray-500 text-[10px] font-semibold mt-3">Anita Mulla</div>
              <div className="text-gray-500 text-[10px] font-semibold mt-3">Huye</div>
              <div className="text-gray-500 button cursor-pointer text-[10px] font-semibold mt-2">
                <img src={remove} className='w-6 h-6' alt="Remove" />
              </div>
              <div className="text-gray-500 button cursor-pointer text-[10px] font-semibold mt-1">
                <img src={edit} className='w-7 h-7' alt="Edit" />
              </div>
            </div>
            
          </div>
          <div className="relative top-[-25px] cursor-pointer flex w-full justify-end pr-3  text-[13px] text-blue-400 ">Next</div>
        </div>
        <div className="w-full sm:w-auto">
          <div className="flex justify-center text-[20px] text-white mb-2 font-bold">Drivers</div>
          <div className="w-full sm:w-[450px] rounded-md h-96 bg-white scrollbar-custom">
            <div className="flex h-10 w-full sm:w-[410px] ml-0 sm:ml-9 justify-around border-b border-gray-400">
              <div className="text-gray-500 text-[12px] font-semibold mt-3">Name</div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">Driving Route</div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">Remove</div>
              <div className="text-gray-500 text-[12px] font-semibold mt-3">Edit</div>
            </div>
            {/*  This is the card where you are going to map the whole data  */}
            <div className="flex hover:bg-blue-50 transition-colors duration-500 h-10 w-full sm:w-[410px] ml-0 sm:ml-9 justify-around border-b border-gray-200">
              <div className="text-gray-500 text-[10px] font-semibold mt-3">Karangwa Shalom</div>
              <div className="text-gray-500 text-[10px] font-semibold mt-3">kigali - Huye</div>
              <div className="text-gray-500 text-[10px] button cursor-pointer font-semibold mt-2">
                <img src={remove} className='w-6 h-6' alt="Remove" />
              </div>
              <div className="text-gray-500 text-[10px] button cursor-pointer font-semibold mt-1">
                <img src={edit} className='w-7 h-7' alt="Edit" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative top-[-45px] cursor-pointer flex w-full justify-end pr-10  text-[13px] text-blue-400 ">Next</div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className="flex  bg-white rounded-lg shadow-xl  w-[420px] h-96  ">
            <div className="flex justify-center items-center w-[150px]  bg-blue-400">
                <div className="text-[12px] font-bold text-white">Add Agent</div>
            </div>
            <div className="pl-10">
            <div className=" mt-5 ml-20 mb-10 text-[20px]  text-blue-400 font-bold">ETIX</div>
            <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Name"
      />
            <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Email"
      />
           <input
        type="text"
        value={workStation}
        onChange={(e) => setWorkStation(e.target.value)}
        className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Work station"
      />
           <input
        type='password'
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Password"
      />
       <div  className="text-center text-white bg-blue-400 pt-1 mt-16    text-[11px] font-semibold rounded cursor-pointer border transition-colors duration-500 hover:bg-blue-200 border-opacity-5  w-52 h-7 ">
                Register
            </div>
            </div>
            </div>
      </Modal>
      <Modal isOpen={open} onClose={closeModal2}>
      <div className="flex  bg-white rounded-lg shadow-xl  w-[420px] h-96  ">
            <div className="flex justify-center items-center w-[150px]  bg-blue-400">
                <div className="text-[12px] font-bold text-white">Add Driver</div>
            </div>
            <div className="pl-10">
            <div className=" mt-5 ml-20 mb-10 text-[20px]  text-blue-400 font-bold">ETIX</div>
            <input
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Driver Name"
      />
            <input
        type="text"
        value={email2}
        onChange={(e) => setEmail2(e.target.value)}
        className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Driver Email"
      />
           <input
        type="text"
        value={workStation2}
        onChange={(e) => setWorkStation2(e.target.value)}
        className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Driving Route"
      />
           <input
        type='password'
        value={Password2}
        onChange={(e) => setPassword2(e.target.value)}
        className="block w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Password"
      />
       <div  className="text-center text-white bg-blue-400 pt-1 mt-16    text-[11px] font-semibold rounded cursor-pointer border transition-colors duration-500 hover:bg-blue-200 border-opacity-5  w-52 h-7 ">
                Register
            </div>
            </div>
            </div>
      </Modal>
    </>

  );
}

export default Employee;
