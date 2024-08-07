import React, { useState } from 'react'
import Modal from '../components/Modal';
import CustomInput from '../components/customInput'
import { Link } from 'react-router-dom';


function Potal() {
    const options = ['Horzon', 'Volcano', 'Ritco'];
     const  [nameMail,setNameMail] = useState('')
     const [Password,setPassword] = useState('')

     const [isModalOpen, setIsModalOpen] = useState(false);

     const openModal = () => setIsModalOpen(true);
     const closeModal = () => setIsModalOpen(false);
 


  return (
    <div className='h-[585px] w-full flex bg-blue-200'>
        <div className="hidden md:flex absolute left-[820px] top-10 text-[20px] text-white font-bold ">Admin</div>
        <div className="h-[585px] w-[620px] bg-blue-400  " style={{borderTopRightRadius:530}}>
         <div className="mt-32 ml-52 flex  text-[20px] text-white font-bold">
            Login potal
         </div>
         <div className="mt-5 ml-52 flex  text-[9px] text-white font-bold">
            E Ticketing system, <br />
            Influence to rapid mobility of people
         </div>
         <div className="flex">
         <div className=" sm:ml-5 ml-1 mt-16">
            <img src="app/assets/9-removebg-preview.png" width={250} height={150} alt="" />
         </div>
         <div className=" mt-36 sm:ml-10">
         <div className="ml-10 flex text-[13px] text-white text-opacity-55 font-bold">Login as an agent</div>
         <div onClick={openModal} className="text-center  text-blue-400 bg-white pt-1 mt-5 sm:ml-12  text-[13px] font-semibold rounded cursor-pointer transition-colors duration-500 hover:bg-blue-200 border-opacity-5  w-24 h-7 ">
                Login
            </div>
            </div>
            </div>
        </div>
        <div className="flex justify-center bg-white absolute left-16 sm:left-[700px] top-32  rounded-lg shadow-xl  w-[320px] h-96  ">
            <div className="">
            <div className=" mt-5 ml-20 mb-10 text-[20px] text-blue-400 font-bold">ETIX</div>
            <CustomInput options={options} placeHolders={'Select Agency'} />
            <input
        type="text"
        value={nameMail}
        onChange={(e) => setNameMail(e.target.value)}
        className="block w-full bg-blue-100 px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Email or name"
      />
           <input
        type='password'
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full bg-blue-100 px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Password"
      />

       <Link to={'/Dash'}  className="">
       <div className="text-center text-white bg-blue-400 pt-1 mt-16    text-[11px] font-semibold rounded cursor-pointer border transition-colors duration-500 hover:bg-blue-200 border-opacity-5  w-52 h-7 ">
       Login
       </div>  
            </Link>
            </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex  bg-white rounded-lg shadow-xl  w-[420px] h-96  ">
            <div className="flex justify-center items-center w-[150px]  bg-blue-400">
                <div className="text-[12px] font-bold text-white">Agent Login</div>
            </div>
            <div className="pl-10">
            <div className=" mt-5 ml-20 mb-10 text-[20px]  text-blue-400 font-bold">ETIX</div>
            <CustomInput options={options} placeHolders={'Select Agency'} />
            <input
        type="text"
        value={nameMail}
        onChange={(e) => setNameMail(e.target.value)}
        className="block bg-blue-100 w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Email or name"
      />
           <input
        type='password'
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        className="block bg-blue-100 w-full px-12 py-2 text-[10px] text-gray-600 shadow-md rounded-lg mt-2  focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Password"
      />
       <Link to={'/Agent'}  className="">
       <div className="text-center text-white bg-blue-400 pt-1 mt-16    text-[11px] font-semibold rounded cursor-pointer border transition-colors duration-500 hover:bg-blue-200 border-opacity-5  w-52 h-7 ">
       Login
       </div>  
            </Link>
            </div>
            </div>
        </Modal>
    </div>
  )
}

export default Potal