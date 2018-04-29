import { createActions } from 'redux-actions';

const {
  search: {
    request: searchSerialRequest,
    success: searchSerialSuccess,
    failure: searchSerialFailure,
  },
} = createActions(
  {
    SEARCH: { REQUEST: null, SUCCESS: null, FAILURE: null },
  },
  { namespace: '_' },
);

export { searchSerialRequest, searchSerialSuccess, searchSerialFailure };
