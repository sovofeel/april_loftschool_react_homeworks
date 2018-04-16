import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes'
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes'

const initState = {
  orders: []
}

let id = 0;

const farmReducer = (state = initState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: [...state.orders, {id: id++, name: action.payload.name}]
      }
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        orders: state.orders.filter(el => el.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export default farmReducer;
