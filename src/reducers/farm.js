import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';
import { sortOrderFn } from './helpers';

const initialState = {
  orders: [],
};

const farmReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: [...state.orders, action.payload].sort(sortOrderFn),
      };

    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        orders: state.orders.filter(value => value.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default farmReducer;
