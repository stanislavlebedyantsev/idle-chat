import {createSlice} from '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    sentMessages: [],
    recivedMessages: [],
  },
  reducers: {
    sentMessages: (state, action) => {
      return {...state, sentMessages: [...state.sentMessages, action.payload]};
    },
  },
});

const {actions, reducer} = messagesSlice;

export const {sentMessages} = actions;

export default reducer;
