import { searchSerialRequest, searchSerialSuccess, searchSerialFailure } from 'actions/search';
import { search } from '../api';

const searchMiddleWare = store => next => action => {
  if (action.type === searchSerialRequest.toString()) {
    search(action.payload)
      .then(serial => {
        store.dispatch(searchSerialSuccess(serial));
      })
      .catch(error => {
        store.dispatch(searchSerialFailure(error));
      });
  }

  return next(action);
};

export default searchMiddleWare;
