import { combineReducers } from '@reduxjs/toolkit';
import contactReducer from './contactsSlice';

const rootReducer = combineReducers({
  contacts: contactReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
