import {StyleSheet} from 'react-native';
import {Colors} from '../themes';

const styles = StyleSheet.create({
  root: {
    flex: 2,
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: Colors.dateGrey,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rootWithImage: {
    flex: 5,
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: Colors.dateGrey,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  rootWithoutImage: {
    flex: 1.5,
    marginTop: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textField: {
    flex: 5,
  },
  buttons: {
    color: Colors.dateGrey,
  },
  image: {
    height: '100%',
    width: '100%',
    flex: 5,
    justifyContent: 'flex-start',
  },
  inputWithImage: {
    flexDirection: 'column',
  },
});

export default styles;
