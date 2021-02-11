import React from 'react';
import {View, Text} from 'react-native';

type ArraysTutorialProps = {};

class ExampleClass {
  propertyOne: string;
  propertyArray: string[] = [];

  constructor(how: string = 'nice') {
    this.propertyOne = how;
  }

  methodOne = () => {
    return this.propertyOne.toUpperCase();
  };
}

export const ArraysTutorial: React.FC<ArraysTutorialProps> = (props) => {
  const example = new ExampleClass('bad');
  console.log(example.propertyOne);
  console.log(example.methodOne());

  const myArray = new Array();

  const initialArray = ['banana', 'apple', 'orange'];
  const mappedArray = initialArray.map((item) => {
    return <Text>{item}</Text>;
  });
  const filteredArray = initialArray.filter((fruit) => {
    return fruit !== 'apple';
  });
  // .map()
  // .filter()
  // .forEach()
  // .pop()
  // .push()
  // .slice()
  // .splice()

  // for loops:
  // - for (let i = 0; i < 10; i++)
  // - for (items in array)
  // - for (items of array)
  // - foreach

  // .length

  return (
    <View>
      {filteredArray.map((fruit) => (
        <Text>{fruit}</Text>
      ))}

      <Text>Arrays tutorial</Text>
    </View>
  );
};

export default ArraysTutorial;
