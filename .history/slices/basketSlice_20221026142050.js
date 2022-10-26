import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Store actions
    addToBasket: (state, action) => {
      let itemList = state.items;
      let itemToAdd = action.payload;
      if (itemList.length === 0) {
        itemToAdd.quantity = 1;
        state.items = [...state.items, itemToAdd];
      } else {
        let itemTofind = itemList.find((x) => x.id === itemToAdd.id);
        if (!itemTofind) {
          //   //item found
          itemToAdd.quantity = 1;
          state.items = [...state.items, itemToAdd];
        } else if (itemTofind) {
          //   //item found
          const filtredItemList = itemList.filter(
            (x) => x.id !== itemTofind.id
          );
          itemTofind.quantity += 1;
          filtredItemList.push(itemTofind);
        }
      }
    },

    //console.log("action", state.items);
    // state.items = [...state.items, action.payload];

    removeFromBasket: (state, action) => {
      let currentBasket = state.items;
      let itemToRemoveId = action.payload;
      let pos = currentBasket.findIndex((item) => item.id === itemToRemoveId);
      console.log("pos=", pos);

      if (pos > -1) {
        let itemToDelete = currentBasket[pos];
        if (itemToDelete.quantity === 1) {
          currentBasket.splice(pos, 1);
          console.log("new basket = ", currentBasket);
        } else if (itemToDelete.quantity > 1) {
          // TODO fix >1  <1
          currentBasket[pos].quantity -= 1;
        } else {
          console.warn(
            `quanity of the  product (id: ${itemToRemove.id})in the basket is negative`
          );
        }
        state.items = currentBasket;
      } else {
        console.warn(
          `Can't remove product (id: ${itemToRemove.id}) as its not in the basket`
        );
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice

export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);
export default basketSlice.reducer;
