import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';
import { sortOrderFn } from './helpers';

const initialState = {
    orders: []
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case MOVE_ORDER_TO_FARM:
            return { 
                orders: [...state.orders, payload].sort(sortOrderFn)
            };
        case MOVE_ORDER_TO_CUSTOMER:
            return { 
                orders: state.orders.filter( order => order.id !== payload.id ) 
            };
        default:
            return state;
    }
}