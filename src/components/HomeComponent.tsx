import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ConstAndLetTutorial from './tutorial/ConstAndLetTutorial';

// https://fettblog.eu/typescript-react/components/#class-components

class HomeComponent extends React.Component<{}>{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.topText}>Hello Component</Text>
                
                <ConstAndLetTutorial />

                <Text style={styles.normalText}>arrays</Text>
                <Text style={styles.normalText}>objects</Text>
                <Text style={styles.normalText}>functions and closures</Text>
                <Text style={styles.normalText}>classes</Text>
                <Text style={styles.normalText}>---</Text>
                <Text style={styles.normalText}>React</Text>
                <Text style={styles.normalText}>React-Native</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topText: {
        fontWeight: "900",
        color: "#aaaaff",
        fontSize: 24,
    },
    normalText: {
        fontSize: 18,
    },
    container: {
        padding: 24,
        margin: 20,
        justifyContent: 'space-between',
        flex: 1,
    }
});

export default HomeComponent;
