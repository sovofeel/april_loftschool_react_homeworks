import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes'

const initState = {
  orders: []
}

const marketReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, {id: action.payload.id}]
      }
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: state.orders.filter(el => el.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export default marketReducer;