import React, {useRef} from 'react';
import {ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import MessageComponent from '@/MessageComponent';
import moment from 'moment';

import styles from './styles';

const MessagesComponent = () => {
  const messages = useSelector(state => state.messages);
  const scrollRef = useRef();

  const generateUniqueKey = pre => {
    return `${pre}_${moment().unix()}`;
  };

  const handleContentSizeChange = () => {
    return scrollRef.current.scrollToEnd({animated: true});
  };

  return (
    <View style={styles.root}>
      <ScrollView ref={scrollRef} onContentSizeChange={handleContentSizeChange}>
        <View>
          {messages.map(element => (
            <MessageComponent
              message={element}
              key={generateUniqueKey(element.text || element.photo.uri)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MessagesComponent;
