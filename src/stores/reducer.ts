import * as actionTypes from "./actionTypes"

const initialState: CartState = {
  count: 0
}

const reducer = (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      const newCount = state.count + 1
      return {
        ...state,
        count: newCount,
      }
  }
  return state
}

export default reducer