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
      type: 'received',
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
    type: 'received',
  },
  _setMoney: money => set(state => ({_senderDetails: {...state._senderDetails, money}})),
  _setNumber: number => set(state => ({_senderDetails: {...state._senderDetails, number}})),
  _setDetails: (to, bank, time, shortTime, reference, type = 'sent') =>
    set(state => ({
      _senderDetails: {
        ...state._senderDetails,
        to,
        bank,
        time,
        shortTime,
        reference: `1LINK-${reference}`,
        type,
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
  _generateRandomNumber: () => {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  },
  _setTime: (type = 1) => {
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
  },
  _setThemeColor: color => {
    const metaThemeColor = document.querySelector('meta[name=theme-color]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', color);
    } else {
      const themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      themeColor.content = color;
      document.head.appendChild(themeColor);
    }
  },
}));

export default useStore;
