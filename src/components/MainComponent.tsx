import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Link } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../navigation/MainStack";

type MainScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Main'
    >;

type Props = {
    navigation: MainScreenNavigationProp;
};

const MainComponent: React.FC<Props> = (props) => {
    const { navigation } = props;

    return (
        <View>
            <Text>Main Component</Text>
            <Link to="/CRUD">
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        You don't have any task, create one now
                    </Text>
                </View>
            </Link>

            <TouchableOpacity onPress={() => navigation.navigate('CRUD', { id: 'aaa12345'})}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Edit task: aaa12345
                    </Text>
                </View>
            </TouchableOpacity>

            <Link to="/Reports">
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Reports
                    </Text>
                </View>
            </Link>

        </View>
    );
};

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

export default MainComponent;