import { configureStore } from '@reduxjs/toolkit';
import addToCartSlice from './reducers/addToCart'; 

const store = configureStore({
  reducer: {
    addToCart: addToCartSlice.reducer, // Đặt tên slice là addToCart và sử dụng reducer addToCartReducer
    clearCart: addToCartSlice.reducer,
    increaseQuantity:addToCartSlice.reducer,
    decreaseQuantity:addToCartSlice.reducer
  },
});

store.subscribe(() => console.log(store.getState()));

export default store;
