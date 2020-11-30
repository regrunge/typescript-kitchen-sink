import React from 'react';
import {View, FlatList, Button} from "react-native";
import ListItem, { DataItem }  from './ListItem';
import card from '../styles/card';

type ListProps = {

};

const data: DataItem[] = [
    { headerText: 'Drawing', subheaderText: '20 minutes', completedToday: false, id: 'qwerty123' },
    { headerText: 'Playing guitar', subheaderText: '20 minutes', completedToday: true, id: 'qiopjkl13' },
];

const sortingByTitle = (things: DataItem[]) => {
    return things.sort((a,b) => a.headerText.localeCompare(b.headerText));
};

const List: React.FC<ListProps> = (props: ListProps) => {
    const [elements, setElements] = React.useState(sortingByTitle(data));

    const onPress = (id: string) => {
        const oldElements = [ ...elements ];
        const filter = oldElements.filter(item => item.id === id);
        const filtr2 = oldElements.filter(item => item.id !== id);
        const needle = filter[0];
        needle.completedToday = !needle.completedToday;
        setElements(sortingByTitle([...filtr2, needle]));
    };

    const onLongPress = (id: string) => {
        const oldElements = [ ...elements ];
        const filtered = oldElements.filter(item => item.id !== id);
        setElements(sortingByTitle(filtered));
    };

    const handleReset = () => {
        setElements(sortingByTitle(data));
    };

    return (
        <View>
            <FlatList
                data={elements}
                renderItem={({ item, index }) => (
                    <ListItem
                        item={item} index={index} key={index}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    />
                ) }
            />
            <Button title={'reset'} onPress={handleReset}/>
        </View>
    );
};

export default List;
