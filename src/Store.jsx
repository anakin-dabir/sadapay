import {create} from 'zustand';

const useStore = create(set => ({
  _user: JSON.parse(localStorage.getItem('_user')) || {name: 'Danish Masood', number: '3039525070'},
  _setUser: _user =>
    set(state => {
      localStorage.setItem('_user', JSON.stringify(_user));
      return {_user};
    }),
  _balance: localStorage.getItem('_balance') || '880',
  _setBalance: _balance =>
    set(state => {
      localStorage.setItem('_balance', _balance);
      return {_balance};
    }),

  _homepageHistory: JSON.parse(localStorage.getItem('_homepageHistory')) || [
    {
      to: 'Javaid Iqbal -',
      number: '03094998057',
      bank: 'Easypaisa',
      money: '300',
      time: '22 November 2023, 6:09 AM',
      shortTime: '6:09 AM',
      reference: '1LINK-500584',
    },
  ],
  _senderDetails: {
    to: 'Javaid Iqbal -',
    number: '03094998057',
    bank: 'Easypaisa',
    money: '300',
    time: '22 November 2023, 6:09 AM',
    shortTime: '6:09 AM',
    reference: '1LINK-500584',
  },
  _setMoney: money => set(state => ({_senderDetails: {...state._senderDetails, money}})),
  _setNumber: number => set(state => ({_senderDetails: {...state._senderDetails, number}})),

  _setDetails: (to, bank, time, shortTime, reference) =>
    set(state => ({
      _senderDetails: {
        ...state._senderDetails,
        to,
        bank,
        time,
        shortTime,
        reference: `1LINK-${reference}`,
      },
    })),

  _setHomepageHistory: senderDetails =>
    set(state => {
      const homePageHistory = [senderDetails, ...state._homepageHistory];
      localStorage.setItem('_homepageHistory', JSON.stringify(homePageHistory));
      return {_homepageHistory: homePageHistory};
    }),

  _pageState: 'HomePage',
  _setPageState: _pageState => set(state => ({_pageState})),
}));

export default useStore;
