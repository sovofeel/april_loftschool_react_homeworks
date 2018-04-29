import { getSerialRequest, getSerialSuccess, getSerialFailure } from 'actions/show';
import { show } from '../api';

const showMiddleWare = store => next => action => {
  if (action.type === getSerialRequest.toString()) {
    show(action.payload)
      .then(response => {
        store.dispatch(getSerialSuccess(response));
      })
      .catch(error => {
        store.dispatch(getSerialFailure(error));
      });
  }

  return next(action);
};

export default showMiddleWare;
