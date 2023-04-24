import { createSlice } from '@reduxjs/toolkit'
const REDUCE_AMMOUNT = 1 //number of items to reduce in

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    subTotal: 0,
    shippingCost: 0,
    customerID: undefined,
    totalAmount: 0,
    totalQuantitiy: 0,
    changed: false,
  },
  reducers: {
    //this function is to replace cart at he first load. will replace the total amount, total quantitiiy,
    // action.payload should have total quanitity, items, totalAmount
    replaceCart(state: any, action: any) {
      console.log('from slice', action.payload)
      state.subTotal = action.payload.subTotal || 0
      state.items = action.payload.products || []
      state.totalAmount =
        action.payload.subTotal + action.payload.shippingCost || 0
      state.shippingCost = action.payload.shippingCost || 0
      state.customerID = action.payload.customerId || undefined
    },

    //this function is for add item
    //requiers a object with item details. for payload.item a item with amount. payload.amount is amount to increase
    //return void
    addItem(state: any, action: any) {
      state.totalAmount += action.payload.item.price * action.payload.amount
      state.totalQuantitiy += action.payload.amount
      state.changed = true
      if (action.payload.item.id in state.items) {
        state.items[action.payload.item.id].amount += action.payload.amount
      } else {
        state.items[action.payload.item.id] = action.payload
      }
    },
    removeItem(state: any, action: any) {
      //payload=itme that needs to change

      //if condition will run only if there is a item with the id
      if (state.items[action.payload]) {
        state.totalAmount -= state.items[action.payload].item.price
        state.totalQuantitiy -= REDUCE_AMMOUNT

        if (state.items[action.payload].amount > 1) {
          state.items[action.payload].amount -= REDUCE_AMMOUNT
        } else if (state.items[action.payload].amount === 1) {
          delete state.items[action.payload]
        }
      }
      if (state.totalQuantitiy === 0) state.totalAmount = 0
    },
  },
})

export const cartActions = cartSlice.actions

export default cartSlice
