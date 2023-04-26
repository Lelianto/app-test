type CartState = {
  count: number
}

type CartAction = {
  type: string
  payload: CartState
}

type DispatchType = (args: CartAction) => CartAction