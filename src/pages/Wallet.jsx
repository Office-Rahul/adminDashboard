import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Wallet = ({ value, userId }) => {
  if(value === undefined){
    value = 0;
  }
  const [wallet1, setWallet1] = useState(value);

  const increment = (setFunction, value) => {
    setFunction(prev => prev + value);
  };

  const decrement = (setFunction, value) => {
    if (wallet1 > 0) {
      setFunction(prev => prev - value);
    }
  };

  useEffect(() => {
    const updateData = async () => {
      try {
        await axios.put(`http://localhost:8000/updateWallet/${userId}`, {
          wallet: wallet1
        });
        console.log('Wallet updated successfully');
      } catch (err) {
        console.log('Failed to update wallet:', err);
      }
    };

    updateData();
  }, [wallet1, userId]);

  return (
    <div className='flex flex-col items-center gap-4 '>
      <div className='flex items-center gap-4'>
        <button onClick={() => decrement(setWallet1, 1)} className='bg-red-500 text-white px-3 py-1 rounded'>
          -
        </button>
        <span className='text-lg'>{wallet1}</span>
        <button onClick={() => increment(setWallet1, 1)} className='bg-blue-500 text-white px-3 py-1 rounded'>
          +
        </button>
      </div>
    </div>
  );
};

export default Wallet;
