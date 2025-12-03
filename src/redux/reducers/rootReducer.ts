import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@/views/auth/store/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
