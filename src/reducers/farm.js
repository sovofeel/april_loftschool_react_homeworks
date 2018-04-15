// prettier-ignore
import { 
	MOVE_ORDER_TO_CUSTOMER
} from '../actions/farmTypes'

import {
	MOVE_ORDER_TO_FARM
} from '../actions/marketTypes'

const initialState = {
	orders: [],
	profit: 0,
	productionPrice: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
		case MOVE_ORDER_TO_FARM:
			return  {
				...state,
				orders: [...state.orders, action.payload]
			}
		case MOVE_ORDER_TO_CUSTOMER:
			return {
				...state,
				orders: [...state.orders.filter(item => item.id !== action.payload.id)]
		}
    default:
      return state;
  }
}

export default reducer;
