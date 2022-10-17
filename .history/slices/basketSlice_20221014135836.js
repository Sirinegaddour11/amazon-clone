import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

// const initialSession = {
//   session: false,
// };

export const basketSlice = createSlice({
  name: "basket",
  initialState,

  reducers: {
    // Store actions
    addToBasket: (state, action) => {

      let itemList=state.items;

      if (itemList.length) {
        
      }

      
      console.log("action",action.payload);
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      let index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];

      if (index > -1) {
        //the item exists in the basket ==> remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in the basket`
        );
      }

      state.items = newBasket;
    },
    //Session
    // activerSession: (state, action) => {
    //   state.session= [true, action.payload]
    // }
  },
});

export const { addToBasket, removeFromBasket, activerSession } =
  basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
// export const modeSession =(state) => state.session;
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);
export default basketSlice.reducer;
