import {createSlice} from '@reduxjs/toolkit';

/* Saving User Register Data */
const initialState = {
  ReducerName: '',
  ReducerEmail: '',
  ReducerPassword: '',
};

export const counterSlice = createSlice({
  name: 'RegisterData',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.ReducerName = action.payload;
    },
    setUserEmail: (state, action) => {
      state.ReducerEmail = action.payload;
    },
    setUserPassword: (state, action) => {
      state.ReducerPassword = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUserName, setUserEmail, setUserPassword} =
  counterSlice.actions;

export default counterSlice.reducer;
