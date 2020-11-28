import { StyleSheet } from "react-native";
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
});
