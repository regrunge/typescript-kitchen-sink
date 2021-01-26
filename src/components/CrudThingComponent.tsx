import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import CheckBox from '@react-native-community/checkbox';
import Thing, {ThingType} from '../models/thing';
import {connect, ConnectedProps} from 'react-redux';
import {addThing, editThing} from '../redux/dispatch/things';
import Card from './Elements/Card';
import {daysOfTheWeek} from '../utils';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/MainStack';
const uuid = require('react-native-uuid');

import materialUiColors from '../theme/material-ui-colors';
import durationMinutes from '../components/Elements/minutesPicker';
import itemStyles from './Elements/styles/itemStyles';

const mapStateToProps = (state: any, ownProps: HomeComponentProps) => {
  const routeId = ownProps.route.params.id;
  const oneThing = state.things.find((t: ThingType) => t.id === routeId);

  return {
    oneThing: oneThing || null,
  };
};

const mapDispatchToProps = {
  addThingProp: (thing: Thing) => addThing(thing), // REDUX action
  editThingProp: (thing: Thing) => editThing(thing), // REDUX action
};

const connector = connect(mapStateToProps, mapDispatchToProps);

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

class CrudThingComponent extends React.PureComponent<
  HomeComponentProps & ConnectedProps<typeof connector>
> {
  state: StateType = {
    daysCheckboxes: [false, false, false, false, false, false, false],
    color: '#000000',
    name: '',
    minutes: 60,
    showDaysThingy: false,
  };

  componentDidMount(): void {
    const {oneThing} = this.props;

    if (oneThing) {
      this.setState((prevState: StateType) => ({
        daysCheckboxes: oneThing.weeklyRecurrence || prevState.daysCheckboxes,
        color: oneThing.color || prevState.color,
        name: oneThing.name || prevState.name,
        minutes: oneThing.durationMinutes || prevState.minutes,
      }));
    }
  }

  createUpdateThing = () => {
    const newThing = {
      name: this.state.name,
      durationMinutes: this.state.minutes,
      id: this.props.oneThing?.id || uuid.v4(),
    };

    const thing = new Thing(
      newThing.durationMinutes,
      newThing.id,
      newThing.name,
    );

    thing.weeklyRecurrence = this.state.daysCheckboxes;
    thing.color = this.state.color;

    if (this.props.oneThing) {
      this.props.editThingProp(thing); // REDUX action
    } else {
      this.props.addThingProp(thing); // REDUX action
    }

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
          <View key={day.id} style={itemStyles.dayCheckboxes}>
            <Text>{day.name}</Text>
            <CheckBox
              style={itemStyles.checkBox}
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
        style={itemStyles.container}
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
        style={itemStyles.container}
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
        <View style={itemStyles.container}>
          {route.params.id && (
            <Text>
              {route.name}: {route.params.id}
            </Text>
          )}
          {this.renderPicker()}
          {this.renderMinutesPicker()}

          <TextInput
            style={itemStyles.textInput}
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
            <View style={itemStyles.buttonContainerSmall}>
              <Text style={itemStyles.buttonText}>
                {this.state.showDaysThingy ? 'Hide' : 'Show'} Days Result
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.createUpdateThing()}>
            <View style={itemStyles.buttonContainer}>
              <Text style={itemStyles.buttonText}>
                {route.params.id ? 'Edit' : 'Create'} Task{' '}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default connector(CrudThingComponent);
