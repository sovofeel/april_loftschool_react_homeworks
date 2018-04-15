import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';

/*
market: {
    orders: []
  },
*/
const marketReducer = (state = { orders: [] }, action) => {
  // console.log({ state, action });
  switch (action.type) {
    case CREATE_ORDER:
      return {
        orders: [action.payload, ...state.orders]
      };
    case MOVE_ORDER_TO_FARM:
      const id = action.payload.id;
      return {
        orders: state.orders.filter(value => value.id !== id)
      };
    default:
      return state;
  }
};

export default marketReducer;
