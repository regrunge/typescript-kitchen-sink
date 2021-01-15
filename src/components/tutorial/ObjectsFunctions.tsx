import React from 'react';
import {View, Text} from 'react-native';

type PersonDetailType = {
  name: string;
  lastname: string;
  age: number;
  gender?: 'male' | 'female' | 'unknown';
  getFullname: (a: string, b: string) => string;
};

class Person {
  personDetails: PersonDetailType = {
    name: 'Jean',
    lastname: 'Doe',
    age: 0,
    getFullname: (a, b) => '',
  };

  constructor(data: PersonDetailType) {
    this.personDetails.name = data.name;
    this.personDetails.lastname = data.lastname;
    this.personDetails.age = data.age;

    if (data.gender) {
      this.personDetails.gender = data.gender;
    } else {
      this.personDetails.gender = 'unknown';
    }
  }

  getFullname: () => {} = () => {
    return this.personDetails.name + ' ' + this.personDetails.lastname;
  };

  realAgeMaker = () => {
    return this.personDetails.age + 10;
  };
}

class Employee extends Person {
  protected salary: number = 0;

  public setSalary = (newSalary: number) => {
    this.salary = newSalary;
  };

  public getSalary = () => {
    return this.salary;
  };
}

const ObjectsFunctions: React.FC<{}> = (props) => {
  const personDetails: PersonDetailType = {
    name: 'Elvis',
    lastname: 'The King',
    age: 28,
    gender: 'male',
    getFullname: (name, lastname) => {
      return name + ' ' + lastname;
    },
  };

  const newPerson = new Employee(personDetails);
  newPerson.setSalary(30000);

  return (
    <View>
      <Text>Obj, func and classes</Text>
      <Text>{personDetails.name}</Text>
      <Text>{personDetails.age}</Text>
      <Text>{personDetails.getFullname('one', 'two')}</Text>

      <Text>{newPerson.personDetails.name}</Text>
      <Text>{newPerson.personDetails.age}</Text>
      <Text>{newPerson.getFullname()}</Text>
      <Text>{newPerson.getSalary()}</Text>
      <Text>{newPerson.realAgeMaker()}</Text>
    </View>
  );
};

export default ObjectsFunctions;
