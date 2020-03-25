import { combineReducers } from 'redux';

import { todos } from './todos/reducer';
import { weather } from './weather/reducer';

const reducers = combineReducers({ todos, weather });

export type RootState = ReturnType<typeof reducers>;

export default reducers;
