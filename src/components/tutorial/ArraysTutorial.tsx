import React from 'react';
import { View, Text } from 'react-native';
import { TextField, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'



type ArraysTutorialProps = {

}

interface TodoItem {
  id: number
  value: string
}

let count = 1


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

export const ArraysTutorial: React.FC = () => {
  const [list, setList] = useState<TodoItem[]>([{id: 0, value: ''}])

  const handleChange = (value: string, id: TodoItem['id']) => {
    setList(prev => prev.map(item => item.id === id ? {... item, value} : item))
  }

  const handleDelete = (id: TodoItem['id']) => {
  setList(prev => prev.filter(item => item.id !== id))
  }

  const handleAdd = (index; number) => {
    const newItem = {id: count++, value: ''}
    setList(prev => [...prev.slice(0, index + 1), newItem, ...prev.slice(index + 1)])
  }

  return (
    <div>
    {list.map((item, index) => (
      <div key={item.id}>
      <TextField
        value={item.value}
        onChange={e => handleChange(e.currentTarget.value, item.id)}
      />
      <IconButton onclick={() => handleAdd(index)}>
         <AddIcon />
      </IconButton>
      {list.length > 1 && (
        <IconButton onclick={() => handleDelete(item.id)}>
           <DeleteIcon />
        </IconButton>
      )}


      </div>
    ))}
    </div>
  )
}


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
