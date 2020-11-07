import React from 'react';
import { View, Text } from 'react-native';

type ArraysTutorialProps = {

}

class ExampleClass {
    propertyOne: string;
    propertyArray: string[] = [];

    constructor (how: string = 'nice') {
        this.propertyOne = how;
    }

    methodOne = () => {
        return this.propertyOne.toUpperCase();
    }
}

const ArraysTutorial: React.FC<ArraysTutorialProps> = (props) => {
    const example = new ExampleClass('bad');
    console.log(example.propertyOne);
    console.log(example.methodOne());

    const myArray = new Array();

    // TODO: checkout...
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
            <Text>Arrays tutorial</Text>
        </View>
    );
};

export default ArraysTutorial;
