import React from 'react';
import useStore from '../Store';
import {Link} from 'react-router-dom';

const History = () => {
  const _homepageHistoryy = useStore(state => state._homepageHistory);
  const _formattedDate = useStore(state => state._formattedDate);
  const _setTime = useStore(state => state._setTime);
  const _groupByDateAndMonth = useStore(state => state._groupByDateAndMonth);
  const _homepageHistory = _groupByDateAndMonth(_homepageHistoryy);

  return (
    <div className='bg-white mt-4 max-w-[460px] mx-auto   rounded-3xl flex flex-col gap-5 p-5'>
      <div className='text-3xl font-medium'>Today</div>
      {Object.entries(_homepageHistory).map(([time, {items, totalMoney, totalMoneySign}], i) => (
        <div key={time} className='relative'>
          <div className='text-sm text-black/50'>
            {_setTime(-2) !== time && _formattedDate(time)}
          </div>
          <div className={`absolute right-0 ${i === 0 ? '-top-7' : 'top-0'} text-xs text-black/50`}>
            {totalMoneySign} Rs. {Math.abs(totalMoney)}
          </div>
          <div>
            {items.map((data, i) => (
              <Link
                to={`/${data.reference}`}
                state={{_homepageHistory: data}}
                key={i}
                className='flex mt-4 flex-col items-stretch gap-1'
              >
                <div className='flex justify-between'>
                  <div className='flex gap-3 items-center justify-center'>
                    <div
                      className={`rounded-2xl ${
                        data.type === 'sent' ? 'bg-primary/10' : 'bg-secondary/10'
                      } h-11 w-11 items-center justify-center`}
                    >
                      {data.type === 'sent' ? (
                        <img src='/ms.png' alt='ms' />
                      ) : (
                        <img src='/mr.png' alt='ms' />
                      )}
                    </div>
                    <div className='flex items-start flex-col'>
                      <div className='text-base font-medium'>{data.to}</div>
                      <div className='text-black/50 text-sm'>{data.shortTime}</div>
                    </div>
                  </div>
                  <div
                    className={`text-md self-start font-medium ${
                      data.type !== 'sent' && 'text-secondaryMedium'
                    }`}
                  >
                    {data.type === 'sent' ? '-' : '+'} Rs. {data.money}
                  </div>
                </div>
                <div className='hidden'>
                  <img src='/icon.png' alt='i' />
                  <img src='/sadapay.png' alt='i' />
                  <img src='/logo.png' alt='i' />
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
