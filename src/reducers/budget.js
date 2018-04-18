import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes';

const initialState = {
    profit: 0,
    marketExpanse: 0,
    farmExpanse: 0,
    deliveryExpanse: 0
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    const {  
        profit, 
        marketExpanse, 
        farmExpanse, 
        deliveryExpanse 
    } = state;

    switch (type) {
        case CREATE_ORDER:
            return {
                ...state,
                profit: profit + payload.price,
                marketExpanse: marketExpanse + 20
            };
        case MOVE_ORDER_TO_FARM:
            return {
                ...state,
                farmExpanse: farmExpanse + 100
            };
        case MOVE_ORDER_TO_CUSTOMER:
            return {
                ...state,
                deliveryExpanse: deliveryExpanse + 20
            };
        default: 
            return state;
    }
}