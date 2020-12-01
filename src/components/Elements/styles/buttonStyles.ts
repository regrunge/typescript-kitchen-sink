import { StyleSheet } from "react-native";
import theme from '../../../theme';

export default StyleSheet.create({
  button: {

    icon: {
    ...theme.typography.icon,
  },

  buttonPrimary: {
    ...theme.colors.primary,
  }
});
