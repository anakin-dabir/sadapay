import React, {useState} from 'react';
import Receipt from './Receipt';
import BackBtn from '../components/BackBtn';
import useStore from '../Store';

const ConfirmPage = () => {
  const _pageState = useStore(state => state._pageState);
  const _setPageState = useStore(state => state._setPageState);
  const _setDetails = useStore(state => state._setDetails);
  const _senderDetails = useStore(state => state._senderDetails);
  const [state, setState] = useState({to: 'JAVAID IQBAL -', bank: 'Easypaisa'});
  const formatDate = (type = 1) => {
    const date = new Date();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let period = 'AM';

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (hours >= 12) {
      period = 'PM';
      hours -= 12;
    }

    if (hours === 0) {
      hours = 12;
    }
    if (type === -1) {
      return `${hours}:${minutes} ${period}`;
    }

    return `${date.getDate()} ${
      monthNames[date.getMonth()]
    } ${date.getFullYear()}, ${hours}:${minutes} ${period}`;
  };
  function generateRandomNumber() {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
  return _pageState === 'ConfirmPage' ? (
    <>
      <div className='bg-background  max-w-[460px] mx-auto h-screen !overflow-hidden w-screen relative p-3 flex flex-col'>
        <BackBtn color='#000000' name='SendPage' />
        <div className='justify-center flex font-bold text-xl mt-1.5'>Confirm</div>
        <div className='mt-6 flex-col flex'>
          <div className='h-20 bg-white w-full rounded-2xl items-center shadow-newShadow p-5 flex'>
            <div className='h-11 w-11 bg-black rounded-full'>
              <img src='/ms.png' />
            </div>
            <div className='flex flex-col pl-4 line-y-[-2px]'>
              <input
                value={state.to}
                onChange={e => setState(pre => ({...pre, to: e.target.value}))}
                className='font-medium text-[20px] placeholder:text-black'
                placeholder='JAVED IQBAL -'
              />
              <input
                value={state.bank}
                onChange={e => setState(pre => ({...pre, bank: e.target.value}))}
                className='text-black/60 text-[18px] placeholder:text-black/60'
                placeholder='Easypaisa'
              />
            </div>
          </div>
          <div className='mt-7 rounded-2xl w-full bg-white flex flex-col shadow-newShadow p-5'>
            <div className='flex flex-col border-b border-b-black/10'>
              <div className='text-black/50 text-sm'>Recipient will get</div>
              <div className='text-2xl font-semibold pb-2 mt-2'>Rs. {_senderDetails.money}</div>
            </div>
            <div className='flex flex-col mt-3'>
              <div className='text-black/50 pl-1 text-sm'>Add a note</div>
              <textarea
                placeholder="e.g. today's lunch"
                className='placeholder:text-black/50 mt-1 pb-2 border rounded-2xl p-4 h-20 border-black/10'
              />
            </div>
          </div>
        </div>
        <button
          id='exclude-btn2'
          onClick={() => {
            _setDetails(state.to, state.bank, formatDate(), formatDate(-1), generateRandomNumber());
            _setPageState('Loading');
          }}
          className={`h-14 mt-auto bg-primary rounded-xl box-center text-white font-bold text-lg`}
        >
          Send Rs. {_senderDetails.money}
        </button>
      </div>
    </>
  ) : (
    <Receipt />
  );
};

export default ConfirmPage;
