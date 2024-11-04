import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    {
      id: 1,
      cardVendor: "Visa", // Kortutgivare
      cardNumber: "4642 3489 9867 7632", // Kortnummer
      cardHolder: "Pelle Karlsson", // Kortinnehavare
      expireMonth: "03", // Utgångsmånad
      expireYear: "25", // Utgångsår
      ccv: "123", // CVV-kod
      active: true,
    },
    {
      id: 2,
      cardVendor: "MasterCard", // Kortutgivare
      cardNumber: "4642 3489 9867 7632", // Kortnummer
      cardHolder: "Tindra Månsson", // Kortinnehavare
      expireMonth: "03", // Utgångsmånad
      expireYear: "25", // Utgångsår
      ccv: "123", // CVV-kod
      active: false,
    },
  ],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addCardWallet: (state, action) => {
      const newCard = {
        ...action.payload,
        id: crypto.randomUUID(), // Automatisk id-generering
        active: false, //nya kort alltid false
      };
      state.cards.push(newCard);
    },

    removeCardWallet: (state, action) => {
      const cardId = action.payload;
      state.cards = state.cards.filter((card) => card.id !== cardId);
    },

    removeInactiveCardsWallet: (state) => {
      state.cards = state.cards.filter((card) => card.active);
    },

    setActiveCardWallet: (state, action) => {
      const cardId = action.payload; // payload = id
      state.cards = state.cards.map((card) =>
        card.id === cardId
          ? { ...card, active: true }
          : { ...card, active: false }
      );
    },

    updateCardWallet: (state, action) => {
      const { id, updates } = action.payload; // Expects {id, updates} as payload
      const cardIndex = state.cards.findIndex((card) => card.id === id);
      if (cardIndex !== -1) {
        state.cards[cardIndex] = {
          ...state.cards[cardIndex],
          ...updates,
        };
      }
    },
  },
});

export const {
  addCardWallet,
  setActiveCardWallet,
  removeCardWallet,
  removeInactiveCardsWallet,
  updateCardWallet,
} = walletSlice.actions;
export default walletSlice.reducer;
