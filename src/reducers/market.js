// prettier-ignore
import { 
	CREATE_ORDER,
	MOVE_ORDER_TO_FARM,
	//DELETE_ORDER_FROM_MARKET
} from '../actions/marketTypes'


const initialState = {
	orders: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
		case CREATE_ORDER:
			return  {
				...state,
				orders: [...state.orders, action.payload]
			}
		case MOVE_ORDER_TO_FARM:
			return {
				...state,
				orders: [...state.orders.filter(item => item.id !== action.payload.id)]
			}
    default:
      return state;
  }
}

export default reducer;
