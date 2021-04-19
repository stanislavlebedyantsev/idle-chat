import {createSlice} from '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
  },
  reducers: {
    sentMessages: (state, action) => {
      state.push(action.payload);
    },
  },
});

const {actions, reducer} = messagesSlice;

export const {sentMessages} = actions;

export default reducer;
