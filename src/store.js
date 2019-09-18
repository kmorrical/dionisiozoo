import {createStore} from 'redux';
import rootReducer from './reducer/index';

export default(initialState)=> {
    return createStore(rootReducer, initialState);
} 