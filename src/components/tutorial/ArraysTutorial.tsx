import React from 'react';
import { View, Text } from 'react-native';

import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import Container from '@material-ui/core/Container'




type ArraysTutorialProps = {

}

class ExampleClass {
    propertyOne: string;
    propertyArray: string[] = [];

    constructor (how: string = 'nice') {
        this.propertyOne = how;
    }

    methodOne = () => {
        return this.propertyOne.toUpperCase();
    }
}

const ArraysTutorial: React.FC<ArraysTutorialProps> = (props) => {
    const example = new ExampleClass('bad');
    console.log(example.propertyOne);
    console.log(example.methodOne());



function CheckboxExample() {
  const [check, setChecked] = React.useState(true)
  return (
     <FormControlLabel
        control={<Checkbox
          check={check}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChecked={(e) => setChecked(e.target.checked)}
          inputProps={{
            'arial-label': 'secondary checkbox'
          }}
      />}
      label='Testing Checkbox'
     />

  );
}

  function ArraysTutorial() {
    return (
      <Container>
      <CheckboxExample />
        <ButtonGroup variant='contained'>
        <Button startIcon={<SaveIcon />}
        size='large'
        color='primary'>
          Save
        </Button>
        <Button startIcon={<DeleteIcon />}
        size='large'
        color='secondary'>
          Discard
        </Button>
        </ButtonGroup>
      </Container>
    );
  }



class ExampleClass {
    propertyOne: string;
    propertyArray: string[] = [];

    constructor (how: string = 'nice') {
        this.propertyOne = how;
    }

    methodOne = () => {
        return this.propertyOne.toUpperCase();
    }
}

const ArraysTutorial: React.FC<ArraysTutorialProps> = (props) => {
    const example = new ExampleClass('bad');
    console.log(example.propertyOne);
    console.log(example.methodOne());





    const myArray = new Array();

    const initialArray = ['banana', 'apple', 'orange'];
    const mappedArray = initialArray.map( (item) => { return (<Text>{item}</Text>)});
    const filteredArray = initialArray.filter((fruit) => { return (fruit !== 'apple') } )

    // TODO: checkout...
    // .map()
    // .filter()
    // .forEach()
    // .pop()
    // .push()
    // .slice()
    // .splice()

    // for loops:
        // - for (let i = 0; i < 10; i++)
        // - for (items in array)
        // - for (items of array)
        // - foreach

    // .length

    return (
        <View>

           {filteredArray.map(fruit => <Text>{fruit}</Text> )}

            <Text>Arrays tutorial</Text>


        </View>
    );
};

export default ArraysTutorial;
