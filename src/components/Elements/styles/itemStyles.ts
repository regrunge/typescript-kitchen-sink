import {StyleSheet} from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing.xs,
    alignItems: 'center',
  },
  itemTextBlock: {
    flexGrow: 1,
  },
  icon: {
    ...theme.typography.icon,
  },
  iconSuccess: {
    color: theme.colors.success,
  },
  iconError: {
    color: theme.colors.error,
  },
  header: {
    ...theme.typography.h6,
  },
  subheader: {
    ...theme.typography.body,
  },
  colorWrapper: {
    width: 24,
    height: 24,
    borderRadius: 8,
    marginRight: 8,
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    margin: 8,
  },
  buttonContainerSmall: {
    backgroundColor: '#cabbf3',
    padding: 4,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  checkBox: {},
  dayCheckboxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 8,
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: '#aaaaff',
  },
});
