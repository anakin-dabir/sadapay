import React, {useState} from 'react';
import Receipt from './Receipt';
import BackBtn from '../components/BackBtn';
import useStore from '../Store';

const ConfirmPage = () => {
  const _pageState = useStore(state => state._pageState);
  const _setPageState = useStore(state => state._setPageState);
  const _setDetails = useStore(state => state._setDetails);
  const _senderDetails = useStore(state => state._senderDetails);
  const _setTime = useStore(state => state._setTime);
  const _generateRandomNumber = useStore(state => state._generateRandomNumber);
  const [state, setState] = useState({to: 'JAVAID IQBAL -', bank: 'Easypaisa'});

  return _pageState === 'ConfirmPage' ? (
    <>
      <div className='bg-background  max-w-[460px] mx-auto h-screen !overflow-hidden w-screen relative p-3 flex flex-col'>
        <BackBtn color='#000000' name='SendPage' />
        <div className='justify-center flex font-bold text-xl mt-1.5'>Confirm</div>
        <div className='mt-6 flex-col flex'>
          <div className=' bg-white w-full rounded-2xl items-center shadow-newShadow gap-4 box-border p-5 flex'>
            <div className='h-11 w-14 border border-black/10 box-center rounded-full'>
              <img src='/icon.png' />
            </div>
            <div className='flex w-full flex-col -space-y-1'>
              <input
                value={state.to}
                onChange={e => setState(pre => ({...pre, to: e.target.value}))}
                className='font-medium text-md  w-[80%]   placeholder:text-black'
                placeholder='JAVED IQBAL -'
              />
              <input
                value={state.bank}
                onChange={e => setState(pre => ({...pre, bank: e.target.value}))}
                className='text-black/60 w-[80%] text-sm placeholder:text-black/60'
                placeholder='Easypaisa'
              />
            </div>
          </div>
          <div className='mt-7 rounded-2xl w-full bg-white flex flex-col shadow-newShadow p-5'>
            <div className='flex flex-col border-b border-b-black/10'>
              <div className='text-black/50 font-light text-sm'>Recipient will get</div>
              <div className='text-2xl font-semibold pb-2 mt-2'>Rs. {_senderDetails.money}</div>
            </div>
            <div className='flex flex-col mt-3 border-b border-b-black/10'>
              <div className='text-black/50 font-light text-sm'>Sender Fee</div>
              <div className='font-medium text-secondary pb-2 mt-2'>Rs. 0</div>
            </div>
            <div className='flex flex-col mt-3'>
              <div className='text-black/50 font-light pl-1 text-sm'>Add a note</div>
              <textarea
                placeholder="e.g. today's lunch"
                className='placeholder:text-black/50 placeholder:font-light mt-1 pb-2 border rounded-2xl p-4 h-20 border-black/10'
              />
            </div>
          </div>
        </div>
        <button
          id='exclude-btn2'
          onClick={() => {
            _setDetails(state.to, state.bank, _setTime(), _setTime(-1), _generateRandomNumber());
            _setPageState('Loading');
          }}
          className={`h-14 mb-3 mt-auto bg-primary rounded-xl box-center text-white font-bold text-lg`}
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
