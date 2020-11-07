import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import CAT, { GenderEnum } from './tutorial/ConstAndLetTutorial';

// https://fettblog.eu/typescript-react/components/#class-components

interface IState {
    showAllDemos: boolean;
}

class HomeComponent extends React.Component<{}, IState>{
    state = {
        showAllDemos: false,
    };

    toggleDemo = () => {
        this.setState(
            (prevState) => {
                return { showAllDemos: !prevState.showAllDemos }
            }
        );
    };

    render(){
        return (
            <View style={styles.container}>
                <Button title={'Show demos'} onPress={this.toggleDemo}/>
                <Text style={styles.topText}>Hello World!</Text>

                <CAT
                    title={'CONST AND LET' + GenderEnum.male}
                    subtitle={1}
                    showDemo={this.state.showAllDemos}
                />

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
