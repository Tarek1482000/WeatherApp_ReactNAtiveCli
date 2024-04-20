import {configureStore} from '@reduxjs/toolkit';
import RegisterReducer from './RegisterReducer';

/* Register Reducer which will save data of user register */
export const store = configureStore({
  reducer: {
    RegisterData: RegisterReducer,
  },
});
