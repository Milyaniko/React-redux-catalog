import { combineReducers } from 'redux';
import FetchDataReducer from './FetchDataReducer';

// Combines ou multiple reducers 
export default combineReducers({
   catalog: FetchDataReducer
});

