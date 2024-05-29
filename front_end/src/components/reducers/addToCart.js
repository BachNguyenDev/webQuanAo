import { createSlice } from "@reduxjs/toolkit";
const addToCartSlice = createSlice({
  name: "cart", 
  initialState: {
    items: [], // Mảng chứa các sản phẩm trong giỏ hàng
    
  },
  reducers: {
    addToCart: (state, action) => {
      // action.payload chứa thông tin của sản phẩm cần thêm vào giỏ hàng
      const product = action.payload;
      const existingProduct = state.items.find(item => item.id === product.id);

      if (existingProduct) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng của sản phẩm đó
        existingProduct.quantity += 1;
      } else {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm với số lượng ban đầu là 1
        state.items.push({ ...product, quantity: 1 });
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.items.find(item => item.id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.items.find(item => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },

  },
});

export const { addToCart, removeFromCart, clearCart,increaseQuantity, decreaseQuantity} = addToCartSlice.actions;
export default addToCartSlice;
