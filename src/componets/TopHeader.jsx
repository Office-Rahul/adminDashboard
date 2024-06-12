import React from 'react';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { MdOutlineMenu } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const TopHeader = ({ open, setOpen }) => {
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    
    sessionStorage.clear();

    navigate('/login');
  };

  return (
    <div className='flex items-center justify-between h-16 p-5 mt-1 rounded-lg bg-blue-50'>
      <div className="flex items-center gap-8">
        <div onClick={() => setOpen(!open)}>
          <MdOutlineMenu className='text-xl' />
        </div>
        <div className="font-medium">Home</div>
      </div>
      <div>
        <button className="bg-red-500 text-white px-4 py-2 rounded flex justify-center items-center gap-1 font-bold hover:bg-red-800" onClick={handleSubmit}>
          Logout
          <span className="text-xl "><BsBoxArrowInRight /></span>
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
