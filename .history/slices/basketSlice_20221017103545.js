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
        // itemList.add(itemToAdd);
        state.items = [...state.items, itemToAdd];
      } else {
        let itemTofind = itemList.find((x) => x.id === itemToAdd.id);
        if (!itemTofind) {
          //   //item found
          itemToAdd.quantity = 1;
          // itemList.add(itemToAdd);
          state.items = [...state.items, itemToAdd];
        } else if (itemTofind) {
          //   //item found
          const filtredItemList = itemList.filter(
            (x) => x.id !== itemTofind.id
          );
          //console.log("filtredItemList", filtredItemList);
          itemTofind.quantity += 1;
          filtredItemList.push(itemTofind);
          // state.items = filtredItemList;
        }
      }
    },

    //console.log("action", state.items);
    // state.items = [...state.items, action.payload];

    removeFromBasket: (state, action) => {
      let currentBasket = state.items;
      let itemToRemoveId = action.payload;
      let pos = currentBasket.findIndex((item) => item.id === itemToRemoveId);
      if (pos > -1) {
        console.log("pos=", pos);
        
         let itemToDelete = state.items[pos];
        if (itemToDelete.quantity === 1) {
          newBasket.splice(pos, 1);
          state.items = newBasket;
          console.log("new basket = ", newBasket);
        } else {
          itemTofind.quantity = itemTofind.quantity - 1;
        }
      } else {
        console.warn(
          `Can't remove product (id: ${itemToRemove.id}) as its not in the basket`
        );
      }
        state.items = newBasket;
       
    },

  
  },
});

export const { addToBasket, removeFromBasket } =
  basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice

export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);
export default basketSlice.reducer;
