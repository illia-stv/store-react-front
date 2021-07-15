import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'state',
  initialState: {
    jwt: localStorage.getItem('jwt') || false,
    myCategories: [],
    cart: []
  },
  reducers: {
    setMyCategories: (state, action) => {
      state.myCategories = action.payload
    },
    setJwt: (state, action) => {
      state.jwt = action.payload
    },
    setCart: (state, action) => {
      state.cart = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMyCategories, setJwt,setCart } = counterSlice.actions

export default counterSlice.reducer