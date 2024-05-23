import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action) =>{
      const indexToRemove = state.items.findIndex(item => item.id === action.payload.id);
      if (indexToRemove !== -1)
        {
            state.items.splice(indexToRemove, 1);
        }
    }
  },
  clearCart:(state) =>{
    state.items=[]
  }
});

export const {addItem, removeItem, clearCart} = CartSlice.actions;
export default CartSlice.reducer;
