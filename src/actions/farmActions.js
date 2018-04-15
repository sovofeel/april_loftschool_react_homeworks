import { MOVE_ORDER_TO_CUSTOMER } from './farmTypes';

export function moveOrderToCustomer(value) {
	return {
		type: MOVE_ORDER_TO_CUSTOMER,
		payload: value 
	}
}
