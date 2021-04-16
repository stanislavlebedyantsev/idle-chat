import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 10,
  },
  rootScrollView: {
    flexDirection: 'row',
  },
  recivedMessages: {
    flex: 1,
  },
  sentMessages: {
    flex: 1,
    alignItems: 'flex-end',
  },
  sentMessageText: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 24,
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  recivedMessageText: {
    backgroundColor: 'grey',
    fontSize: 24,
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
});

export default styles;
