import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Link, RouteProp} from '@react-navigation/native';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/MainStack';
import List from './Elements/List';
import Timer from './Elements/Timer';
import itemStyles from './Elements/styles/itemStyles';
import {connect} from "react-redux";
import {ThingType} from "../models/thing";
import Thing from "../models/thing";
import {addThing, editThing} from "../redux/dispatch/things";

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;
type MainScreenRouteProp = RouteProp<RootStackParamList, 'Main'>;

type Props = {
  navigation: MainScreenNavigationProp;
  route: MainScreenRouteProp;
  things: Thing[];
};

const mapStateToProps = (state: any, ownProps: Props) => {
    return {
        things: state.things,
    };
};

const mapDispatchToProps = {
    addThingProp: (thing: Thing) => addThing(thing), // REDUX action
    editThingProp: (thing: Thing) => editThing(thing), // REDUX action
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const MainComponent: React.FC<Props> = (props) => {
  const {navigation, route} = props;
  const [showTimer, setShowTimer] = useState(false);
  const [maxTimer, setMaxTimer] = useState(69);

  const onSelected = (id: string | number | null) => {
      const thing = props.things.find((t: ThingType) => t.id === id) || { durationMinutes : 0};
    setShowTimer(true);
    setMaxTimer(thing.durationMinutes * 60);
  };

  const onComplete = () => {
    setShowTimer(false);
    setMaxTimer(69);
  };

  return (
    <View style={itemStyles.container}>
      <Text>Main Component</Text>

        <View style={{ backgroundColor: 'black', width: 200, height: 200, borderBottomLeftRadius: 100, borderBottomRightRadius: 100 }}>

        </View>

      <Timer
          show={showTimer}
          max={maxTimer}
          onComplete={onComplete}
      />



      <List navigation={navigation} onSelected={onSelected} />

      <Link to="/CRUD">
        <View style={itemStyles.buttonContainerSmall}>
          <Text style={itemStyles.buttonText}>
            You don't have any task, create one
          </Text>
        </View>
      </Link>
      <TouchableOpacity
        onPress={() => navigation.navigate('CRUD', {id: 'aaa12345'})}>
        <View style={itemStyles.buttonContainerSmall}>
          <Text style={itemStyles.buttonText}>Edit task: aaa12345</Text>
        </View>
      </TouchableOpacity>

      <Link to="/Reports">
        <View style={itemStyles.buttonContainerSmall}>
          <Text style={itemStyles.buttonText}>Reports</Text>
        </View>
      </Link>
    </View>
  );
};

export default connector(MainComponent);
