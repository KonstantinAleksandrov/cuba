import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {I2ProductData} from "../types";
import {IProducts} from '../Components/MainComponents/ProductsData'

export interface CounterState {
  products: I2ProductData[],
  categories: IProducts
}

const initialState: CounterState = {
  products: [],
  categories: {
    pizza: {
      type: 'pizza',
      route: '/pizza',
    },
    snacks: {
      type: 'snacks',
      route: '/snacks',
    },
    beverages: {
      type: 'drinks',
      route: '/beverages',
    },
  }
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductList: (state, action: PayloadAction<I2ProductData[]>) => {
      state.products = action.payload
    }
  },
})



// Action creators are generated for each case reducer function
export const { getProductList } = productSlice.actions
console.log('productSlice', productSlice)
export default productSlice.reducer