import {userDataReducer} from './userDataReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({usersData: userDataReducer});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
