export const strToUpper = (str: string) => {
    return str.toUpperCase();
};

export const strToUpperWithPrefix = (str: string, prefix: string = 'Hello,') => {
    return prefix + ' ' + str.toUpperCase();
};

const utils = {
    strToUpper,
    strToUpperWithPrefix,
};

export default utils;
