import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Link, RouteProp} from '@react-navigation/native';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/MainStack';
import List from './Elements/List';
import Timer from './Elements/Timer';
import itemStyles from './Elements/styles/itemStyles';

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;
type MainScreenRouteProp = RouteProp<RootStackParamList, 'Main'>;

type Props = {
  navigation: MainScreenNavigationProp;
  route: MainScreenRouteProp;
};

const MainComponent: React.FC<Props> = (props) => {
  const {navigation, route} = props;
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
    <View style={itemStyles.container}>
      <Text>Main Component</Text>

      <Timer show={showTimer} max={maxTimer} onComplete={onComplete} />

      <List navigation={navigation} onSelected={onSelected} />

      <Link to="/CRUD">
        <View style={itemStyles.buttonContainer}>
          <Text style={itemStyles.buttonText}>
            You don't have any task, create one now
          </Text>
        </View>
      </Link>
      <TouchableOpacity
        onPress={() => navigation.navigate('CRUD', {id: 'aaa12345'})}>
        <View style={itemStyles.buttonContainer}>
          <Text style={itemStyles.buttonText}>Edit task: aaa12345</Text>
        </View>
      </TouchableOpacity>

      <Link to="/Reports">
        <View style={itemStyles.buttonContainer}>
          <Text style={itemStyles.buttonText}>Reports</Text>
        </View>
      </Link>
    </View>
  );
};

export default MainComponent;
