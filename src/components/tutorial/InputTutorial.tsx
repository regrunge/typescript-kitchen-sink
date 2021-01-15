import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';


  const InputTutorial = () => {
  const [name, setName] = useState('Seva');
  const [age, setAge] = useState('31');

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder={'e.g. John Doe'}
        value={name}
        onChangeText={(val) => setName(val)} />

      <Text>Enter age:</Text>
      <TextInput
        keyboardType={"numeric"}
        style={styles.input}
        placeholder={'e.g. 99'}
        value={age}
        onChangeText={(val) => setAge(val)} />

      <Text>
        name: {name}, age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 400,
    flexGrow: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});

export default InputTutorial;
