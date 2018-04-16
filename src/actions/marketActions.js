import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes';

const createOrder = (payload) => ({
  type: CREATE_ORDER,
  payload: payload,
});

const moveOrderToFarm = (payload) => ({
  type: MOVE_ORDER_TO_FARM,
  payload: payload,
});

export default {createOrder, moveOrderToFarm};