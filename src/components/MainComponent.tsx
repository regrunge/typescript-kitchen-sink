import React from 'react';
import { View, Text, Image, Button, Animated, Easing } from 'react-native';
import {Link, RouteProp} from '@react-navigation/native';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/MainStack';
import List from './Elements/List';
import Timer from './Elements/Timer';
import itemStyles from './Elements/styles/itemStyles';
import {connect, ConnectedProps} from 'react-redux';
import {ThingType} from '../models/thing';
import Thing from '../models/thing';
import { addThing, deleteThing, editThing } from '../redux/dispatch/things';
import { addSession } from "../redux/dispatch/sessions";

import LinearGradient from 'react-native-linear-gradient';
import {SessionType} from '../models/session';

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;
type MainScreenRouteProp = RouteProp<RootStackParamList, 'Main'>;

type Props = {
  navigation: MainScreenNavigationProp;
  route: MainScreenRouteProp;
  things: Thing[];
  image: any;
};

const mapStateToProps = (state: any, ownProps: Props) => {
  return {
    things: state.things,
  };
};

const mapDispatchToProps = {
  addThingProp: (thing: Thing) => addThing(thing), // REDUX action
  editThingProp: (thing: Thing) => editThing(thing), // REDUX action
  deleteThingProp: (thingId: string | number | null) => deleteThing(thingId),
  addSessionProp: (thingId: string | number | null) => addSession(thingId),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const imageSrc = require('./../img/rose.png');

const MainComponent: React.FC<Props & ConnectedProps<typeof connector>> = (props) => {
  const {navigation, route} = props;
  const [showTimer, setShowTimer] = React.useState(false);
  const [maxTimer, setMaxTimer] = React.useState(69);

  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: true,
      easing: Easing.out(Easing.elastic(1)),
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
      easing: Easing.in(Easing.elastic(1)),
    }).start();
  };

  const onSelected = (id: string | number | null) => {
    const thing = props.things.find((t: ThingType) => t.id === id) || {
      durationMinutes: 0,
    };
    setShowTimer(true);
    setMaxTimer(thing.durationMinutes * 60);
    props.addSessionProp(id);
    fadeIn();
  };

  const onDeleted = (id: string | number | null) => {
    // const thing = props.things.find((t: ThingType) => t.id === id);
    // TODO: Seva?!
  };

  const onComplete = () => {
    setShowTimer(false);
    setMaxTimer(69);
    fadeOut();
  };



  return (
    <LinearGradient
      start={{x: 0, y: 0.1}}
      end={{x: 0, y: 1}}
      colors={['#cfdef3', '#ffffff']}
      style={itemStyles.container}>
      <View style={itemStyles.containerChildTop}>
        <View style={itemStyles.containerChildColumn}>
          <Button title="I" onPress={fadeIn} />
        </View>

        <Animated.View
          style={[
            itemStyles.containerChildCenter,
            {transform: [{translateY: fadeAnim}, {perspective: 1000}]},
          ]}>
          <View style={itemStyles.shadow}>
            <Image source={imageSrc} style={itemStyles.imageContainer} />
          </View>

          <Timer show={showTimer} max={maxTimer} onComplete={onComplete} />
        </Animated.View>

        <View style={itemStyles.containerChildColumn}>
          <Button title="O" onPress={fadeOut} />
        </View>
      </View>

      {/*Bottom part*/}
      <View style={itemStyles.containerChildBottom} >
        {/* TODO: Seva, follow the onSelected to add a onDeleted */}
        <List
          navigation={navigation}
          onSelected={onSelected}
          onDelete={onDeleted}
        />

        <Link to="/CRUD">
          <View style={itemStyles.buttonContainerSmall}>
            <Text style={itemStyles.buttonText}>Create</Text>
          </View>
        </Link>
        <Link to="/Reports">
          <View style={itemStyles.buttonContainerSmall}>
            <Text style={itemStyles.buttonText}>Reports</Text>
          </View>
        </Link>
      </View>
    </LinearGradient>
  );
};

export default connector(MainComponent);
