import React from 'react';
import  {View, Text, StyleSheet} from 'react-native';
import List from './Things/List';

class HomeComponent extends React.Component {
    state = {

    };

    render () {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Text>Timer</Text>
                <Text>List</Text>
                <Text>CRUD item (Create Read Update Delete)</Text>
                <List />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        margin: 8,
    }
});

export default HomeComponent;
