import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Picker, SliderBase } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import List from './Elements/List';
import Thing from "../models/thing";
import { connect, ConnectedProps } from 'react-redux';
import { addThing } from "../redux/dispatch/things";
import Card from './Elements/Card';
import { daysOfTheWeek } from '../utils';
import {StackNavigationProp} from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';
import {RootStackParamList} from "../navigation/MainStack";
import { ColorPicker, toHsv, fromHsv } from 'react-native-color-picker';



const mapDispatchToProps = {
    addThingProp: (thing: Thing) => addThing(thing),
};

const connector = connect(null, mapDispatchToProps);

type CRUDScreenNavigationProp = StackNavigationProp<
        RootStackParamList,
        'CRUD'
    >;

type CRUDScreenRouteProp = RouteProp<RootStackParamList, 'CRUD'>;

type HomeComponentProps = {
    navigation: CRUDScreenNavigationProp;
    route: CRUDScreenRouteProp;
};

type StateType = {
    daysCheckboxes: boolean[],
    color: string;
    name: string;
    showDaysThingy: boolean;
}

class CrudThingComponent extends React.Component<HomeComponentProps & ConnectedProps<typeof connector>> {
    state: StateType = {
        daysCheckboxes: [ false, false, false, false, false, false, false ],
        color: '#000000',
        name: '',
        showDaysThingy: false,
    };

    colorPicker = () => (
       {
       name: this.state.name,
       color:toHsv('red')
       
       }
    )
    
      

    createThing = () => {
        const newThing = {
            name: this.state.name,
            durationMinutes: 23,
        };

        const thing = new Thing(
            newThing.durationMinutes,
            newThing.name
        );

        thing.weeklyRecurrence = this.state.daysCheckboxes;
        thing.color = this.state.color;

        this.props.addThingProp(thing);
    };

    handleDaysCBChange = (dayIndex: number) => {
        this.setState((oldState: StateType) => {
                const daysCheckboxes = [...oldState.daysCheckboxes];
                daysCheckboxes[dayIndex] = !oldState.daysCheckboxes[dayIndex];

                return { daysCheckboxes };
            }
        );
    };

    


    renderDaysChecker = () => {
        return (
            <Card>
                {daysOfTheWeek.map(
                    (day) => (
                        <View key={day.id} style={styles.dayCheckboxes}>
                            <Text>{day.name}</Text>
                            <CheckBox
                                style={styles.checkBox}
                                onValueChange={() => this.handleDaysCBChange(day.id)}
                                value={this.state.daysCheckboxes[day.id]}
                            />
                            
                        </View>
                    )
                )}
        </Card>)
    };

    renderDaysResults = () => {
        return (
            <Card>
                {daysOfTheWeek.map(
                    (day) => (
                        <Text key={day.id}>{day.name}: {this.state.daysCheckboxes[day.id] ? 'YES' : ' NO'}</Text>
                    )
                )}
            </Card>)
    };


    render () {
        const { route } = this.props;

        return (
            <View style={styles.container}>
                {route.params.id && (<Text>{route.name}: {route.params.id}</Text>)}
                <Picker
       mode="dropdown"
       selectedValue={{}}
       itemStyle={{textAlign:'center',color:''}}
       onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >
        <Picker.Item color='#00bfff' label="Blue" value=''/>
        <Picker.Item color='#b20000' label="Red" value=''/>
        <Picker.Item color='#00854d' label="Green" value=''/>
        <Picker.Item color='#a786cb' label="Purple" value=''/>
      </Picker>

                <TextInput
                    style={styles.textInput}
                    onChangeText={ (text) => this.setState({ name: text })}
                    value={this.state.name}
                    placeholder={'Write stuff!'}
                />


                {this.renderDaysChecker()}

                {this.state.showDaysThingy && this.renderDaysResults()}

                <TouchableOpacity
                    onPress={() => this.setState( (oldState: StateType) => ({
                        showDaysThingy: !oldState.showDaysThingy
                    }))}
                >
                    <View style={styles.buttonContainerSmall}>
                        <Text style={styles.buttonText}>
                            {this.state.showDaysThingy ? 'Hide' : 'Show'} Days Result
                        </Text>
                    </View>
                </TouchableOpacity>

                <List />

                <TouchableOpacity onPress={() => this.createThing()}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                            Create Task
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
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
    checkBox: {

    },
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
