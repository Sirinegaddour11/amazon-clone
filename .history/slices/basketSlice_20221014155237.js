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
        // item not found
        if (!itemTofind) {
          itemToAdd.quantity = 1;
          state.items = [...state.items, itemToAdd];
        } else {
          //item found
          const filtredItemList = itemList.filter(
            (x) => x.id !== itemTofind.id
          );
          console.log("filtredItemList", filtredItemList);
          itemTofind.quantity += 1;
          filtredItemList.push(itemTofind);
          state.items = filtredItemList;
        }
      }

      console.log("action", state.items);
      // state.items = [...state.items, action.payload];
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

    remove: (state, action) => {
      let itemToRemove = action.payload;
      let List = state.items;
      // let index = state.items.find((item) => item.id === itemToRemove.id);

      if (List.length === 0) {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in the basket`
        );
      } else {
        if (itemToRemove.quantity === 1) {
          newList.splice(index, 1);
          state.items = [...state.items, itemToRemove];
          console.log("new list", List);
        } else if (itemToRemove.quantity > 1) {
          let index = state.items.find((item) => item.id === itemToRemove.id);
          itemToRemove.quantity = itemToRemove.quantity - 1;
        }
      }
      state.items = List;
    },
  },
});

export const { addToBasket, removeFromBasket, remove } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice

export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);
export default basketSlice.reducer;