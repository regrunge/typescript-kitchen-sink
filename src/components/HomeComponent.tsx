import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import List from './Elements/List';
import Thing from "../models/thing";
import { connect } from 'react-redux';
import { addThing } from "../redux/dispatch/things";

class HomeComponent extends React.Component {
    state = {

    };

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

                {/*<Text>Home</Text>*/}
                {/*<Text>Timer</Text>*/}
                {/*<Text>List</Text>*/}
                {/*<Text>CRUD item (Create Read Update Delete)</Text>*/}
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
    }
});


export default connect(null, null)(HomeComponent);
