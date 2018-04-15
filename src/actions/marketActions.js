import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes';


export function createOrder(value) {
	return {
		type: CREATE_ORDER,
		payload: value 
	}
}

export function moveOrderToFarm(value) {
	return {
		type: MOVE_ORDER_TO_FARM,
		payload: value
	}
}