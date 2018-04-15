// import { MOVE_ORDER_TO_FARM, MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';
import { CREATE_ORDER, MOVE_ORDER_TO_FARM }  from '../actions/marketTypes';

/*
 budget: {
  profit: 170,
  marketExpanse: 20,
  farmExpanse: 100,
  deliveryExpanse: 20
}
*/
const initState = {
  profit: 0,
  marketExpanse: 0,
  farmExpanse: 0,
  deliveryExpanse: 0
};
const farmReducer = (state = initState, action) => {
  // console.log('initState', initState);
  // console.log({ state, action });
  switch (action.type) {
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        deliveryExpanse: state.deliveryExpanse - 20
      };
    case CREATE_ORDER:
      const price = action.payload.price;
      return {
        ...state,
        profit: state.profit + price,
        marketExpanse: state.marketExpanse - 20
      };
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        farmExpanse: state.farmExpanse - 100
      };
    default:
      return state;
  }
};

export default farmReducer;
