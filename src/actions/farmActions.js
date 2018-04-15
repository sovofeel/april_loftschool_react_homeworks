import { MOVE_ORDER_TO_CUSTOMER } from './farmTypes';


/*
{
  type: 'MOVE_ORDER_TO_CUSTOMER',
  payload: {
    id: 1,
    name: 'Горох',
    price: 170,
    createdAt: '2018-04-15T08:40:14.688Z'
  }
}
*/
export const moveOrderToCustomer = (payload) => ({
  type: MOVE_ORDER_TO_CUSTOMER,
  payload
});
