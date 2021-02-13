export const strToUpper = (str: string) => {
  return str.toUpperCase();
};

export const strToUpperWithPrefix = (
  str: string,
  prefix: string = 'Hello,',
) => {
  return prefix + ' ' + str.toUpperCase();
};



export const daysOfTheWeek = [
  {name: 'Monday', id: 0},
  {name: 'Tuesday', id: 1},
  {name: 'Wednesday', id: 2},
  {name: 'Thursday', id: 3},
  {name: 'Friday', id: 4},
  {name: 'Saturday', id: 5},
  {name: 'Sunday', id: 6},
];

const utils = {
  daysOfTheWeek,
  strToUpper,
  strToUpperWithPrefix,
};

export default utils;
