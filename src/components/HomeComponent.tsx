import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import List from './Elements/List';
import Card from './Elements/Card';

class HomeComponent extends React.Component {
    state = {

    };

    render () {
        return (
            <View style={styles.container}>
            <Card>
                {/*<Text>Home</Text>*/}
                {/*<Text>Timer</Text>*/}
                {/*<Text>List</Text>*/}
                {/*<Text>CRUD item (Create Read Update Delete)</Text>*/}
                <List />
              </Card>

                <TouchableOpacity onPress={() => {}}>
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
        padding: 24,
        borderRadius: 35,

    },
    buttonText: {
        color: 'white',
        fontSize: 32,
        textTransform: 'uppercase',
        textAlign: 'center',
    }
});

export default HomeComponent;
