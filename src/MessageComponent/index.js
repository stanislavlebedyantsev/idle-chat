import React from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';
import FastImage from 'react-native-fast-image';

import styles from './styles';

const MessageComponent = ({message}) => {
  return (
    <View
      style={[
        styles.messageBlock,
        message.role === 'sent' ? styles.sentMessages : styles.recivedMessages,
        !message.photo ? styles.messageBlockPaddings : '',
      ]}>
      {message.photo ? (
        <View
          style={{
            width: 300,
            height: 300,
          }}>
          <FastImage
            style={styles.image}
            source={{
              uri: message.photo.uri,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      ) : null}
      {message.text ? (
        <Text
          style={[
            styles.messageText,
            message.role === 'sent' ? styles.sentMessageText : styles.recivedMessageText,
          ]}>
          {message.text}
        </Text>
      ) : null}

      <Text
        style={[
          styles.messageDate,
          message.role !== 'sent' ? styles.messageDateTextRecived : styles.messageDateTextSent,
        ]}>
        {' '}
        {moment(message.date).format('HH:mm')}
      </Text>
    </View>
  );
};

export default MessageComponent;
