import React from 'react';
import {View} from 'react-native';

import InputMessageComponent from '@/InputMessageComponent';
import MessageComponent from '@/MessagesComponent';

import styles from './styles';

const ChatComponent = () => {
  return (
    <View style={styles.root}>
      <MessageComponent />
      <InputMessageComponent />
    </View>
  );
};

export default ChatComponent;
