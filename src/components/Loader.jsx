import React from 'react';

const Loader = () => {
  return (
    <>
      <div className='fixed bg-white z-1000 left-1/2 top-1/2  box-center -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-2xl'>
        <div className='animation'>
          <img src='/logo.png' alt='icon' className='h-20 w-20' />
        </div>
      </div>
      <div className='inset-0 bg-black/50 h-screen w-screen'></div>
    </>
  );
};

export default Loader;
