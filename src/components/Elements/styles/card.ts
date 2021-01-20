import {StyleSheet} from 'react-native';
import theme from '../../../theme';

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },

  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
export default styles;
