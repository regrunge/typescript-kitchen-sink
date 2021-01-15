import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import CheckBox from '@react-native-community/checkbox';
import Thing from '../models/thing';
import {connect, ConnectedProps} from 'react-redux';
import {addThing} from '../redux/dispatch/things';
import Card from './Elements/Card';
import {daysOfTheWeek} from '../utils';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/MainStack';

const uuid = require('react-native-uuid');

import materialUiColors from '../theme/material-ui-colors';
import durationMinutes from '../components/Elements/minutesPicker';

const mapDispatchToProps = {
  addThingProp: (thing: Thing) => addThing(thing), // REDUX action
};

const connector = connect(null, mapDispatchToProps);

type CRUDScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CRUD'>;

type CRUDScreenRouteProp = RouteProp<RootStackParamList, 'CRUD'>;

type HomeComponentProps = {
  navigation: CRUDScreenNavigationProp;
  route: CRUDScreenRouteProp;
};

type StateType = {
  daysCheckboxes: boolean[];
  color: string;
  name: string;
  showDaysThingy: boolean;
  minutes: number;
};

class CrudThingComponent extends React.Component<
  HomeComponentProps & ConnectedProps<typeof connector>
> {
  state: StateType = {
    daysCheckboxes: [false, false, false, false, false, false, false],
    color: '#000000',
    name: '',
    showDaysThingy: false,
    minutes: 60,
  };

  createThing = () => {
    const newThing = {
      name: this.state.name,
      durationMinutes: this.state.minutes,
      id: uuid.v4(),
    };

    const thing = new Thing(
      newThing.durationMinutes,
      newThing.id,
      newThing.name,
    );

    thing.weeklyRecurrence = this.state.daysCheckboxes;
    thing.color = this.state.color;

    this.props.addThingProp(thing); // REDUX action
    this.props.navigation.goBack();
  };

  handleDaysCBChange = (dayIndex: number) => {
    this.setState((oldState: StateType) => {
      const daysCheckboxes = [...oldState.daysCheckboxes];
      daysCheckboxes[dayIndex] = !oldState.daysCheckboxes[dayIndex];

      return {daysCheckboxes};
    });
  };

  renderDaysChecker = () => {
    return (
      <Card>
        {daysOfTheWeek.map((day) => (
          <View key={day.id} style={styles.dayCheckboxes}>
            <Text>{day.name}</Text>
            <CheckBox
              style={styles.checkBox}
              onValueChange={() => this.handleDaysCBChange(day.id)}
              value={this.state.daysCheckboxes[day.id]}
            />
          </View>
        ))}
      </Card>
    );
  };

  renderDaysResults = () => {
    return (
      <Card>
        {daysOfTheWeek.map((day) => (
          <Text key={day.id}>
            {day.name}: {this.state.daysCheckboxes[day.id] ? 'YES' : ' NO'}
          </Text>
        ))}
      </Card>
    );
  };

  renderMinutesPicker = () => {
    const minutes = Object.entries(durationMinutes).map(([key, value]) => ({
      key: key,
      value: value,
    }));

    return (
      <Picker
        mode="dropdown"
        selectedValue={this.state.minutes}
        style={styles.container}
        onValueChange={(itemValue) => this.setState({minutes: itemValue})}>
        {minutes.map((minute) => (
          <Picker.Item label={minute.key} value={minute.value} />
        ))}
      </Picker>
    );
  };

  renderPicker = () => {
    const colors = Object.entries(materialUiColors).map(([key, value]) => ({
      key: key.replace('_', ' ').toUpperCase(),
      value,
    }));

    return (
      <Picker
        mode="dropdown"
        selectedValue={this.state.color}
        style={styles.container}
        onValueChange={(itemValue) => this.setState({color: itemValue})}>
        {colors.map((color) => (
          <Picker.Item
            color={color.value}
            label={color.key}
            value={color.value}
          />
        ))}
      </Picker>
    );
  };

  render() {
    const {route} = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          {route.params.id && (
            <Text>
              {route.name}: {route.params.id}
            </Text>
          )}
          {this.renderPicker()}
          {this.renderMinutesPicker()}

          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({name: text})}
            value={this.state.name}
            placeholder={'Write stuff!'}
          />

          {this.renderDaysChecker()}

          {this.state.showDaysThingy && this.renderDaysResults()}

          <TouchableOpacity
            onPress={() =>
              this.setState((oldState: StateType) => ({
                showDaysThingy: !oldState.showDaysThingy,
              }))
            }>
            <View style={styles.buttonContainerSmall}>
              <Text style={styles.buttonText}>
                {this.state.showDaysThingy ? 'Hide' : 'Show'} Days Result
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.createThing()}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Create Task</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

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

export default connector(CrudThingComponent);
