import React, {useState} from 'react';
import BackBtn from '../components/BackBtn';
import Receipt from './Receipt';

const DetailPage = ({selectedPrice, pageState, setPageState}) => {
  const initialData = {number: '', bank: '', name: ''};
  const [details, setDetails] = useState(initialData);

  return pageState === 'DetailPage' ? (
    <div className='bg-background  max-w-[460px] mx-auto h-screen !overflow-hidden w-screen relative p-3 flex flex-col justify-between'>
      <BackBtn color='#000000' name='SendPage' setPageState={setPageState} />
      <div className='mt-16 flex flex-col'>
        <div className='text-3xl font-semibold'>Send Money</div>
        <div className='text-black/70 pl-1.5 mt-5'>Enter IBAN, account number</div>
        <input
          value={details.number}
          onChange={e => setDetails(pre => ({...pre, number: e.target.value}))}
          autoFocus
          type='text'
          placeholder='PK19SADA0000311XXXX'
          className='mt-2 rounded-full h-10 px-3 text-black/70 border-black border'
        />
        <div className='text-black/70 pl-1.5 mt-5'>Enter Name</div>
        <input
          value={details.name}
          onChange={e => setDetails(pre => ({...pre, name: e.target.value}))}
          type='text'
          placeholder='Name'
          className='mt-2 rounded-full h-10 px-3 text-black/70 border-black border'
        />
        <div className='text-black/70 pl-1.5 mt-5'>Bank Name</div>
        <input
          value={details.bank}
          onChange={e => setDetails(pre => ({...pre, bank: e.target.value}))}
          type='text'
          placeholder='Bank Name'
          className='mt-2 rounded-full h-10 px-3 text-black/70 border-black border'
        />
      </div>
      <button
        disabled={!details.bank || !details.name || !details.number}
        onClick={() => setPageState('Loading')}
        className={`h-14 mt-auto bg-primary rounded-xl box-center text-white font-bold text-[17px]`}
      >
        Send Rs. {selectedPrice}
      </button>
    </div>
  ) : (
    <Receipt
      details={details}
      selectedPrice={selectedPrice}
      pageState={pageState}
      setPageState={setPageState}
    />
  );
};

export default DetailPage;
