import Cart from "@/assets/icons/shopping-cart.svg?raw";
import Controller from "@/assets/icons/game-controller.svg?raw";
import Aircraft from "@/assets/icons/aircraft.svg?raw";
import Battery from "@/assets/icons/battery.svg?raw";
import Signal from "@/assets/icons/signal.svg?raw";
import Brush from "@/assets/icons/round-brush.svg?raw";

export const state = () => ({
  CARDS_DATA: [
    {
      holder: "Maria Benitez",
      expireDate: "06/25",
      cardId: 1234454545451234,
    },
    {
      holder: "Alberto García",
      expireDate: "08/25",
      cardId: 5634454545459035,
    },
  ],
  WEEKLY_PAYMENTS: [75, 34],
  TRANSACTIONS_HISTORIES: [
    [
      {
        receiver: "Carlos González",
        type: "Shopping",
        date: "20 Nov 2021",
        amount: "57.64",
        icon: Cart,
      },
      {
        receiver: "Alberto Pérez",
        type: "Electronics",
        date: "03 Mar 2020",
        amount: "60.23",
        icon: Battery,
      },
      {
        receiver: "Gabriel Companioni",
        type: "Travel",
        date: "01 Jan 2019",
        amount: "80.03",
        icon: Aircraft,
      },
      {
        receiver: "Luis Amat",
        type: "Gaming",
        date: "25 Feb 2020",
        amount: "45.97",
        icon: Controller,
      },
      {
        receiver: "Lázaro Navarro",
        type: "Shopping",
        date: "19 Apr 2020",
        amount: "38.76",
        icon: Cart,
      },
    ],
    [
      {
        receiver: "Lázaro Navarro",
        type: "Shopping",
        date: "19 Apr 2020",
        amount: "38.76",
        icon: Cart,
      },
      {
        receiver: "Gustavo Companioni",
        type: "Electronics",
        date: "05 Jul 2021",
        amount: "68.23",
        icon: Battery,
      },
      {
        receiver: "Greta Companioni",
        type: "Travel",
        date: "21 May 2019",
        amount: "89.03",
        icon: Aircraft,
      },
      {
        receiver: "Carlos Morales",
        type: "Shopping",
        date: "22 Dec 2021",
        amount: "58.64",
        icon: Cart,
      },
      {
        receiver: "Mercedes Benitez",
        type: "Gaming",
        date: "19 Sep 2020",
        amount: "48.97",
        icon: Controller,
      },
    ],
  ],
  GOALS: [
    [
      {
        text: "Communications",
        date: "20/01/2019",
        balance: 50,
        icon: Signal,
        iconClass: 'is-primary',
      },
      {
        text: "Renovation",
        date: "20/05/2019",
        balance: 200,
        icon: Brush,
        iconClass: 'is-tertiary'
      },
      {
        text: "XBox",
        date: "20/07/2019",
        balance: 550,
        icon: Controller,
        iconClass: 'is-secondary'
      },
    ],
    [
      {
        text: "Electronics",
        date: "10/07/2020",
        balance: 70,
        icon: Battery,
        iconClass: 'is-primary',
      },
      {
        text: "Travels",
        date: "05/09/2020",
        balance: 287,
        icon: Aircraft,
        iconClass: 'is-secondary'
      },
      {
        text: "Shopping",
        date: "30/10/2020",
        balance: 300,
        icon: Brush,
        iconClass: 'is-tertiary'
      },
    ],
  ],
  ACTIVE_CARD: 0,
  IS_ENABLED: false,
});

export const getters = {
  cardsData: (state) => {
    return state.CARDS_DATA;
  },
  isEnabled: (state) => {
    return state.IS_ENABLED;
  },
  activeCard: (state) => {
    return state.CARDS_DATA[state.ACTIVE_CARD];
  },
  weeklyPayment: (state) => {
    return state.WEEKLY_PAYMENTS[state.ACTIVE_CARD];
  },
  transactionsHistory: (state) => {
    return state.TRANSACTIONS_HISTORIES[state.ACTIVE_CARD];
  },
  goals: (state) => {
    return state.GOALS[state.ACTIVE_CARD];
  },
};

export const mutations = {
  updateActiveCard(state, payload) {
    if (payload === "backward" && state.ACTIVE_CARD !== 0) {
      state.ACTIVE_CARD = state.ACTIVE_CARD - 1;
    } else if (
      payload === "forward" &&
      state.ACTIVE_CARD !== state.CARDS_DATA.length - 1
    ) {
      state.ACTIVE_CARD = state.ACTIVE_CARD + 1;
    }
  },
  updateIsEnabled(state, payload) {
    state.IS_ENABLED = payload;
  },
};