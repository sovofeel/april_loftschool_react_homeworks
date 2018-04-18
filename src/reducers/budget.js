// prettier-ignore
import { 
	MOVE_ORDER_TO_CUSTOMER
} from '../actions/farmTypes'

import {
	MOVE_ORDER_TO_FARM,
	CREATE_ORDER
} from '../actions/marketTypes'

const initialState = {
	profit: 0,
	marketExpanse: 0,
	farmExpanse: 0,
	deliveryExpanse: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
		case MOVE_ORDER_TO_CUSTOMER:
			return  {
				...state,
				deliveryExpanse: state.deliveryExpanse + 20
			}
		case CREATE_ORDER:
			return {
				...state,
				profit: state.profit + action.payload.price
			}
		case MOVE_ORDER_TO_FARM:
			return {
				...state,
				farmExpanse: state.farmExpanse + 100
		}
    default:
      return state;
  }
}

export default reducer;
