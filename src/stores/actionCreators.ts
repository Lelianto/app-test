import * as actionTypes from "./actionTypes"

export function addToCart(cart: CartState) {
  const action: CartAction = {
    type: actionTypes.ADD_CART,
    payload: cart,
  }

  return action
}