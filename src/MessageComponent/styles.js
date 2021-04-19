import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@/themes';

const styles = StyleSheet.create({
  messageBlock: {
    marginTop: 10,
    borderRadius: 20,
    maxWidth: '80%',
    maxHeight: '100%',
    paddingBottom: 5,
  },
  messageBlockPaddings: {
    paddingHorizontal: 10,
  },
  recivedMessages: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.grey,
    alignItems: 'flex-start',
  },
  sentMessages: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.blue,
    alignItems: 'flex-end',
  },
  messageText: {
    fontSize: Fonts.medium,
    paddingTop: 10,
  },
  sentMessageText: {
    color: Colors.white,
    marginHorizontal: 10,
    textAlign: 'right',
  },
  recivedMessageText: {
    marginHorizontal: 10,
    textAlign: 'left',
  },
  messageDate: {
    fontSize: Fonts.small,
    marginHorizontal: 10,
  },
  messageDateTextRecived: {
    color: Colors.dateGrey,
  },
  messageDateTextSent: {
    color: Colors.white,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 20,
  },
});

export default styles;
