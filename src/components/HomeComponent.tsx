import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import List from './Elements/List';
import WeekdayPicker from "react-native-weekday-picker"
import Thing from "../models/thing";
import { connect } from 'react-redux';
import { addThing } from "../redux/dispatch/things";
import Card from './Elements/Card';

class HomeComponent extends React.Component {
    state = {

    };
    
    createThings = () => {
        const days = { 1:1, 2:1 , 3:1 , 4:1 , 5:1, 6:0, 0:0 }
        <WeekdayPicker
          days={days}
          onChange={this.handleChange}
          style={styles.picker}
          dayStyle={styles.day}
        />   
    }


   createRandomTask = () => {
        const newThing = {
            name: 'Play the guitar',
            durationMinutes: 23,
        };

        const thing = new Thing(newThing.durationMinutes, newThing.name);

        console.log(thing);
        this.props.dispatch(addThing(thing))
    };

    render () {
        return (
            <View style={styles.container}>
                <Card>
                <Text>Monday </Text><CheckBox style={styles.checkBox} /> 
                <Text>Tuesday</Text>
                <CheckBox style={styles.checkBox} />
                </Card>
                 
                <List />


                <TouchableOpacity onPress={() => this.createRandomTask()}>
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
    buttonText: {
        color: 'white',
        fontSize: 24,
        textTransform: 'uppercase',
        textAlign: 'center',
    },

    checkBox: {
        marginHorizontal:320,
    }
});


export default connect(null, null)(HomeComponent);
