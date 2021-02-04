import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  Animated,
  StyleSheet,
} from 'react-native';
import {Link, RouteProp} from '@react-navigation/native';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/MainStack';
import List from './Elements/List';
import Timer from './Elements/Timer';
import itemStyles from './Elements/styles/itemStyles';
import {connect} from 'react-redux';
import {ThingType} from '../models/thing';
import Thing from '../models/thing';
import {addThing, editThing} from '../redux/dispatch/things';
import LinearGradient from 'react-native-linear-gradient';
import styles from "./Elements/styles/card";


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
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const MainComponent: React.FC<Props> = (props) => {
  const {navigation, route} = props;
  const [showTimer, setShowTimer] = React.useState(false);
  const [maxTimer, setMaxTimer] = React.useState(69);

  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 200,
      duration: 3000,
      useNativeDriver: true,

    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const onSelected = (id: string | number | null) => {
    const thing = props.things.find((t: ThingType) => t.id === id) || {
      durationMinutes: 0,
    };
    setShowTimer(true);
    setMaxTimer(thing.durationMinutes * 60);
  };

  const onComplete = () => {
    setShowTimer(false);
    setMaxTimer(69);
  };


  return (

  <LinearGradient  start={{x: 0, y: 0.10}} end={{x: 0, y: 1}} colors={['#cfdef3','#ffffff']} style={itemStyles.container}>
    <View style={itemStyles.containerChildTop}>
      <View style={itemStyles.containerChildColumn}>
        <Button title="I" onPress={fadeIn} />
      </View>

        <Animated.View
          style={[
            itemStyles.containerChildCenter,
            {transform: [
                { translateY: fadeAnim },
                { perspective: 1000 }
              ]}
          ]}>
          <View style={itemStyles.shadow}>
            <Image
              source={require('./../img/rose.png')}
              style={itemStyles.imageContainer}

            />
          </View>

          <Timer show={showTimer} max={maxTimer} onComplete={onComplete} />
        </Animated.View>

        <View style={itemStyles.containerChildColumn}>
          <Button title="O" onPress={fadeOut} />
        </View>
      </View>

      {/*Bottom part*/}
      <View style={itemStyles.containerChildBottom}>
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
    </LinearGradient>
  );
};


export default connector(MainComponent);
