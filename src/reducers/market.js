import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { sortOrderFn } from './helpers';

const initState = {
  orders: [],
};

const marketReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        orders: [...state.orders, action.payload].sort(sortOrderFn),
      };
    case MOVE_ORDER_TO_FARM:
      return {
        orders: state.orders.filter(order => order.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default marketReducer;
