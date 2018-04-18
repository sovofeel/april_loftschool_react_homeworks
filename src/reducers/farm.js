import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';
import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';

const initState = {
  orders: [],
  profit: 0,
  productionPrice: 0
};
const farmReducer = (state = initState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: [action.payload, ...state.orders]
      };
    case MOVE_ORDER_TO_CUSTOMER:
      const id = action.payload.id;
      return {
        ...state,
        orders: state.orders.filter(value => value.id !== id)
      };
    default:
      return state;
  }
};

export default farmReducer;
