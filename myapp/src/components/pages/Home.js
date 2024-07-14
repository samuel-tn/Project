import React from 'react';
import Navbar from '../../Navbar';
import '../App.css';



function Home() {
  return (
   <div>
    <Navbar/>
        <div className='p1'>
          DUTIES AND TAXES CALCULATION MADE SIMPLE
        </div>
        <div className='p2'>
        TRY OUR CALCULATOR
        </div>
    </div>
  );
};

export default Home;