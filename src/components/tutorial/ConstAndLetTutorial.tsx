import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

type ConstAndLetTutorialProps = {
    title: string;
    subtitle?: number;
    showDemo?: boolean;
}

const translations = {
    genders: [
        'Male', 'Female', 'other',
    ]
};

export enum GenderEnum {
    'male',  // 0
    'female', // 1
    'other', // 2
}

type PersonObjectType = {
    name: string;
    age: number;
    gender: GenderEnum;
    somethingElse?: any;
}

const ConstAndLetTutorial: React.FC<ConstAndLetTutorialProps> = (props: ConstAndLetTutorialProps) => {

    const [counter, setCounter] = React.useState(42);

    const { title, subtitle, showDemo } = props;

    const num: number = 42;
    const fruits: string[] = ['banana', 'apple'];
    fruits.push('orange');

    const personObject: PersonObjectType = {
      name: 'Elvis',
      age: 18,
      gender: GenderEnum.male,
    };

    personObject.age = personObject.age + 20;
    personObject.somethingElse = 123;

    let letNumber: number = counter;

    const even: boolean = (counter % 2 === 0);

    if (even === true) {
        letNumber = letNumber + 1000;
    } else {
        letNumber += 1000000;
        letNumber++;
        letNumber = letNumber + 1;
        letNumber += 1;
    }

    return (
        <View>
            <Text>{title}</Text>
            <Text>JavaScript {subtitle}</Text>
            {showDemo && (
                <>
                    <Text>NUM: {num}</Text>
                    <View>
                        {fruits.map((f, index) => (<Text key={index}>{f} = {index}</Text>))}
                    </View>
                    <Text>{personObject.name} is {personObject.age} years old and {translations.genders[personObject.gender]}</Text>
                    <Text>{personObject.somethingElse}</Text>
                    <Text>{letNumber}</Text>
                    <Text>{even ? 'EVEN' : 'ODD'}</Text>
                    <Button title={'Increases'} onPress={() => {setCounter(counter + 1)}}/>
                </>
            )}

        </View>
    );
};


export default ConstAndLetTutorial;
