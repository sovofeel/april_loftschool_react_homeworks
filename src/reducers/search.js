import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { searchSerialRequest, searchSerialSuccess, searchSerialFailure } from 'actions/search';

const serials = handleActions(
  {
    [searchSerialSuccess]: (_, action) => action.payload,
  },
  [],
);

const isLoading = handleActions(
  {
    [searchSerialRequest]: () => true,
    [searchSerialSuccess]: () => false,
    [searchSerialFailure]: () => false,
  },
  false,
);

const error = handleActions(
  {
    [searchSerialFailure]: (_, action) => action.error,
  },
  null,
);

export default combineReducers({ serials, isLoading, error });
