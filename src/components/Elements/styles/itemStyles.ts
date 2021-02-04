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
    flex: 1,
    margin: 0,
    backgroundColor:'white',
  },
  containerChildTop: {
    flex: 3,
    margin: 0,
    flexDirection: 'row' as 'row',
  },
  containerChildBottom: {
    flex: 2,
    margin: 0,
  },
  containerChildCenter: {
    flex: 1,
    margin: 0,
    alignItems: 'center',

  },
  containerChildColumn: {
    width: 40,
    padding: 8,
    marginTop: 40,
    alignItems: 'center',

  },

  buttonContainerSmall: {
    backgroundColor: '#112940',
    padding: 4,
    borderRadius: 4,
  },
  buttonText: {
    color: '#dddfde',
    fontSize: 18,
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
  imageContainer: {
    width: 280,
    height: 550,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    position: 'relative',
    top: -200,
    marginBottom: -400,
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: '#aaaaff',
  },
});
