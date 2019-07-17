import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//import reducers from "./reducers";
import ageReducer from './reducers/ageReducer';
import sumReducer from './reducers/sumReducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const rducers = combineReducers({
    age:ageReducer,
    sum:sumReducer
})

// const logAction = store => {
// return next=> {
//     return action =>{
//         const result = next(action);
//         console.log(result);
//         return result;
//     }
// }
// }
const store = createStore(rducers, applyMiddleware(thunk));
const temp = (
    <Provider store={store}>
<App />
    </Provider>
)

ReactDOM.render(temp, document.getElementById('root'));

serviceWorker.unregister();
