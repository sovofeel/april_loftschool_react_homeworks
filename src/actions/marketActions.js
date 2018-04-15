import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from './marketTypes';

/*
{
  type: 'CREATE_ORDER',
  payload: {
    id: 1,
    name: 'Горох',
    price: 170,
    createdAt: '2018-04-15T08:40:14.688Z'
  }
}
*/
export const createOrder = (payload) => ({
  type: CREATE_ORDER,
  payload
});

/*
{
  type: 'MOVE_ORDER_TO_FARM',
  payload: {
    id: 1,
    name: 'Горох',
    price: 170,
    createdAt: '2018-04-15T08:40:14.688Z'
  }
}
*/
export const moveOrderToFarm = (payload) => ({
  type: MOVE_ORDER_TO_FARM,
  payload
});
