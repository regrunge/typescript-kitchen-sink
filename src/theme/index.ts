export const colors = {
    primary: '#90caf9',
    secondary: '#f48fb1',
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
    background: '#e9e9e9',
    button: '#f3bad6',
    typeNormal: '#242424',
    typeLight: '#aaaaaa',
};

export const typography = {
    h1: {
        fontSize: 48,
        color: colors.typeNormal,
    },
    h2: {
        fontSize: 24,
        color: colors.typeLight,
    },
    h6: {
        fontSize: 16,
        color: colors.info,
        fontWeight: "900" as "900",
        textTransform: "uppercase" as "uppercase",
    },
    body: {
        fontSize: 16,
        color: colors.typeNormal,
    },
    icon: {
        fontSize: 24,
        color: colors.typeNormal,
    },
};

export const spacing = {
    xs: 8,
    md: 16,
    lg: 24,
};

export default {
    colors: colors,
    typography: typography,
    spacing: spacing,
}
