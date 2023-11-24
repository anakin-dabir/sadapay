import React, {useState} from 'react';
import useStore from '../Store';

const Modal = () => {
  const [user, setUser] = useState({name: '', number: ''});
  const _user = useStore(state => state._user);
  const _setUser = useStore(state => state._setUser);
  const [modalState, setModalState] = useState(_user.name === 'Sadiq Basheer' ? false : true);

  return (
    <>
      <div
        className={`fixed rounded-t-3xl bottom-0 ${
          modalState ? 'translate-y-full' : ''
        } p-4 pt-10 z-10 flex flex-col justify-between bg-white transition-transform ease-in-out shadow-newShadow max-w-[460px]`}
      >
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-1'>
            <div className='text-black/70 ml-1'>Enter Name</div>
            <input
              value={user.name}
              onChange={e => setUser(pre => ({...pre, name: e.target.value}))}
              type='text'
              className='p-3 border border-black/10 rounded-2xl'
              placeholder='Name'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-black/70 ml-1'>Enter Number</div>
            <input
              value={user.number}
              onChange={e => setUser(pre => ({...pre, number: e.target.value}))}
              type='text'
              className='p-3 border border-black/10 rounded-2xl'
              placeholder='Number'
            />
          </div>
        </div>
        <button
          disabled={!user.name || !user.number}
          onClick={() => {
            _setUser(user);
            setModalState(pre => !pre);
          }}
          className='disabled:bg-primary/50 box-center text-lg text-white mt-20 font-semibold bg-primary rounded-xl h-14'
        >
          Continue
        </button>
      </div>
      <div
        className={`h-screen-w-screen ${
          modalState && 'hidden'
        } fixed top-0 bg-black/70 inset-0 z-8`}
      ></div>
    </>
  );
};

export default Modal;
