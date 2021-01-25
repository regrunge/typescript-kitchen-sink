import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import {Link, RouteProp} from '@react-navigation/native';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/MainStack';
import List from './Elements/List';
import InputTutorial from "./tutorial/InputTutorial";
import Timer from "./Elements/Timer";

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;
type MainScreenRouteProp = RouteProp<RootStackParamList, 'Main'>;

type Props = {
  navigation: MainScreenNavigationProp;
  route: MainScreenRouteProp;
};

const MainComponent: React.FC<Props> = (props) => {
  const { navigation, route } = props;
  const [showTimer, setShowTimer] = useState(false);
  const [maxTimer, setMaxTimer] = useState(10);

  const onSelected = (id: string | number | null) => {
    setShowTimer(true);
    setMaxTimer(12);
  };

  const onComplete = () => {
    setShowTimer(false);
    setMaxTimer(10);
  };

  return (
    <View style={styles.container}>
      <Text>Main Component</Text>

      <Timer show={showTimer} max={maxTimer} onComplete={onComplete}/>

      <List navigation={navigation} onSelected={onSelected}/>

      <Link to="/CRUD">
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            You don't have any task, create one now
          </Text>
        </View>
      </Link>
      <TouchableOpacity
        onPress={() => navigation.navigate('CRUD', {id: 'aaa12345'})}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Edit task: aaa12345</Text>
        </View>
      </TouchableOpacity>

      <Link to="/Reports">
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Reports</Text>
        </View>
      </Link>

    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    margin: 8,
  },
  buttonContainer: {
    backgroundColor: '#90caf9',
    padding: 16,
    borderRadius: 35,
  },
  buttonContainerSmall: {
    backgroundColor: '#90caf9',
    padding: 4,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  checkBox: {},
  dayCheckboxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 8,
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: '#aaaaff',
  },
});

export default MainComponent;
