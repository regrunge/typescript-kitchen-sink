import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import CAT, {GenderEnum} from './ConstAndLetTutorial';
import ArraysTutorial from './ArraysTutorial';
import ObjectsFunctions from './ObjectsFunctions';

import whatever from '../../utils';

const one = whatever.strToUpper('One');
const two = whatever.strToUpperWithPrefix('world');

// https://fettblog.eu/typescript-react/components/#class-components

interface IState {
  showAllDemos: boolean;
}

class TutorialComponent extends React.Component<{}, IState> {
  state = {
    showAllDemos: false,
  };

  toggleDemo = () => {
    this.setState((prevState) => {
      return {showAllDemos: !prevState.showAllDemos};
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title={'Show demos'} onPress={this.toggleDemo} />
        <Text style={styles.topText}>Hello World!</Text>

        <CAT
          title={'CONST AND LET' + GenderEnum.male}
          subtitle={1}
          showDemo={this.state.showAllDemos}
        />
        <ObjectsFunctions />
        <ArraysTutorial />

        <Text style={styles.normalText}>---</Text>
        <Text style={styles.normalText}>React</Text>
        <Text style={styles.normalText}>React-Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topText: {
    fontWeight: '900',
    color: '#aaaaff',
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
  },
});

export default TutorialComponent;
