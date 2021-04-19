import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import moment from 'moment';
import {IconButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';

import {sentMessages} from '@/redux/messegesReduser';

import styles from './styles';

const InputMessageComponent = () => {
  const [textFieldState, setTextFieldState] = useState('');
  const [photoState, setPhotoState] = useState(null);
  const handleChangeText = text => {
    setTextFieldState(text);
  };
  const dispatch = useDispatch();
  const onSendPress = () => {
    // send logic here
    const newMessage = {
      role: 'sent',
      text: textFieldState,
      photo: photoState,
      date: moment(),
    };
    dispatch(sentMessages(newMessage));
    setTextFieldState('');
    setPhotoState(null);
  };
  const onAddPhotoPress = () => {
    const options = {
      noData: true,
    };
    launchImageLibrary(options, response => {
      if (response.uri) {
        setPhotoState(response);
      }
    });
  };
  return (
    <View style={photoState ? styles.rootWithImage : styles.rootWithoutImage}>
      {photoState ? (
        <FastImage
          style={styles.image}
          source={{
            uri: photoState.uri,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      ) : null}
      <View style={styles.root}>
        <IconButton
          style={styles.buttons}
          icon="plus"
          color="black"
          size={20}
          onPress={onAddPhotoPress}
        />
        <TextInput
          style={styles.textField}
          onChangeText={handleChangeText}
          defaultValue={textFieldState}
          placeholder="Type a message..."
        />
        {textFieldState.length || photoState ? (
          <IconButton
            style={styles.buttons}
            icon="send"
            color="black"
            size={20}
            onPress={onSendPress}
          />
        ) : null}
      </View>
    </View>
  );
};

export default InputMessageComponent;
