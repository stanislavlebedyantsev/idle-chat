import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import moment from 'moment';

import styles from './styles';

const MessageComponent = () => {
  const sentMessages = useSelector(state => state.messages.sentMessages);

  const generateUniqueKey = pre => {
    return `${pre}_${moment().unix()}`;
  };

  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={styles.rootScrollView}>
          <View style={styles.recivedMessages}>
            {sentMessages.map(element => (
              <Text style={styles.recivedMessageText} key={generateUniqueKey(element)}>
                {element}
              </Text>
            ))}
          </View>

          <View style={styles.sentMessages}>
            {sentMessages.map(element => (
              <Text style={styles.sentMessageText} key={generateUniqueKey(element)}>
                {element}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MessageComponent;
