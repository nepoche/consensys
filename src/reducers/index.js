import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import { drizzleReducers } from 'drizzle';
import loginReducer from './loginReducer';
import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({
    routing: routerReducer,
    loginReducer,
    form: formReducer,
    ...drizzleReducers
});

export default reducer;