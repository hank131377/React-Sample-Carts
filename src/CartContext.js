import React from 'react'
import { createContext, useContext } from 'react'

const CartContext = createContext({})
export default CartContext

export const cartReducer = (state, action) => {
  const index = state.cartList.findIndex((v) => v.id === action.payload.id)
  switch (action.type) {
    case 'ADD_TO_CARD':
      return index === -1
        ? { cartList: [...state.cartList, action.payload] }
        : state
    case 'CHANGE_CART_QTY':
      ;[...state.cartList][index].qty = action.payload.qty
      return { cartList: [...state.cartList] }
    case 'DELETE':
      return {
        cartList: [...state.cartList].filter(
          (prod, i) => prod.id !== action.payload.id
        ),
      }
    default:
      return state
  }
}

export const cartInit = {
  cartList: [],
}
