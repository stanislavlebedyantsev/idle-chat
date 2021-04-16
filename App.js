import React from 'react';
import {Provider} from 'react-redux';

import ChatComponent from '@/ChatComponent';
import store from '@/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ChatComponent />
    </Provider>
  );
};

export default App;
