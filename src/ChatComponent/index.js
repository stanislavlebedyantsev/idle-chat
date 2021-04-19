import React from 'react';
import {View} from 'react-native';

import InputMessageComponent from '@/InputMessageComponent';
import MessagesComponent from '@/MessagesComponent';

import styles from './styles';

const ChatComponent = () => {
  return (
    <View style={styles.root}>
      <MessagesComponent />
      <InputMessageComponent />
    </View>
  );
};

export default ChatComponent;
