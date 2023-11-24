import React, {useState} from 'react';
import BackBtn from '../components/BackBtn';
import {useNavigate} from 'react-router-dom';

const Cards = () => {
  const navigate = useNavigate();
  const backFunction = () => {
    navigate('/');
  };
  const [data, setData] = useState(false);
  return (
    <>
      <div className='bg-background h-screen flex max-w-[460px] mx-auto relative p-4 flex-col w-screen !overflow-hidden'>
        <BackBtn name='HomePage' color='#000000' onTouchStart={backFunction} />
        <div className='flex items-center flex-col'>
          <div className='font-medium text-lg mt-1'>My Cards</div>
        </div>
        <div className='h-9 rounded-2xl bg-gray-500/10 mt-6 box-center'>
          <div className='h-7 w-[98%] rounded-3xl bg-white box-center font-medium'>Physical</div>
        </div>
        <div className='flex flex-col rounded-2xl mt-8 h-[50%] bg-gradient-to-b justify-between from-secondaryMedium to-secondary mx-auto p-5 w-[80%]'>
          <div className=' flex flex-row w-full'>
            <img src='/icon.png' className='h-9 w-9' />
            <div className='h-48 w-40 flex flex-col gap-1.5 text-lg font-semibold items-end text-white'>
              <div>{data ? '3 3 9 0' : '● ● ● ●'}</div>
              <div>{data ? '3 9 0 9' : '● ● ● ●'}</div>
              <div>{data ? '0 9 9 1' : '● ● ● ●'}</div>
              <div>3 1 5 8</div>
              <div className='flex gap-3'>
                <div className='text-white/80 text-base font-normal'>Exp date </div>
                <div>{data ? '3 1 / 1 2' : '● ● / ● ●'}</div>
              </div>
              <div className='flex gap-3'>
                <div className='text-white/80 text-base font-normal'>CVC </div>
                <div>{data ? '7 4 7' : '● ● ●'}</div>
              </div>
            </div>
          </div>
          <div className='flex gap-2'>
            <button
              onClick={() => setData(pre => !pre)}
              className='w-1/2 h-10 rounded-3xl bg-green-950 text-white box-center font-semibold'
            >
              View
            </button>
            <button className='w-1/2 h-10 rounded-3xl bg-green-950 text-white box-center font-semibold'>
              Copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
