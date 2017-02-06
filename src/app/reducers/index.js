import {combineReducers} from 'redux';
import PriceReducer from './reducers-price.js';
import Activeplan from './reducers_active_plan.js';

const AllReducers = combineReducers({
	Prices:PriceReducer,
	activeplan: Activeplan
})


export default AllReducers;