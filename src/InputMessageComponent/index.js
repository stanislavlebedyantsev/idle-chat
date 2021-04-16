import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {sentMessages} from '@/redux/messegesReduser';

import styles from './styles';

const InputMessageComponent = () => {
  const [textFieldState, setTextFieldState] = useState('');
  const handleChangeText = text => {
    setTextFieldState(text);
  };
  const dispatch = useDispatch();
  const onSendPress = () => {
    // send logic here
    dispatch(sentMessages(textFieldState));
    setTextFieldState('');
  };
  const onAddPhotoPress = () => {
    // add photo logic
  };
  return (
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
      {textFieldState.length ? (
        <IconButton
          style={styles.buttons}
          icon="send"
          color="black"
          size={20}
          onPress={onSendPress}
        />
      ) : null}
    </View>
  );
};

export default InputMessageComponent;
