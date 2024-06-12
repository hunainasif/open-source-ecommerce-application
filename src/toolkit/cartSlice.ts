import { createSlice, PayloadAction } from "@reduxjs/toolkit";

 

interface CartState {
  products:any
  cartQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  products: [],
  cartQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action:any) => {
      state.cartQuantity += 1;
      state.products.push(action.payload);
      state.totalPrice += action.payload.quantity * action.payload.price;
    },
    removeProduct: (state, action:any) => {
        state.products = state.products.filter((item:any) => item._id !== action.payload);
        state.cartQuantity -= 1;
        // Optionally adjust the totalPrice
        const removedProduct = state.products.find((item:any) => item._id === action.payload);
        if (removedProduct) {
          state.totalPrice -= removedProduct.quantity * removedProduct.price;
        }
     },
    reset: (state) => {
      state.products = [];
      state.cartQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, reset,removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
