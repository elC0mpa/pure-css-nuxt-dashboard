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
  WEEKLY_PAYMENTS: [
    75, 34
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
};

export const mutations = {
  updateActiveCard(state, payload) {
    if (payload === 'backward' && state.ACTIVE_CARD !== 0) {
      state.ACTIVE_CARD = state.ACTIVE_CARD - 1
    }
    else if (payload === 'forward' && state.ACTIVE_CARD !== state.CARDS_DATA.length - 1) {
      state.ACTIVE_CARD = state.ACTIVE_CARD + 1
    }
  },
  updateIsEnabled(state, payload) {
    state.IS_ENABLED = payload;
  },
};
