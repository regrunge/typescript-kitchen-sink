import React from 'react';
import { View, FlatList } from "react-native";
import Item from './Item';

type ListProps = {

};

type DataItem = {
    title: string;
    time: number;
    completedToday: boolean;
    id: string;
}

const data: DataItem[] = [
    { title: 'Drawing', time: 20, completedToday: false, id: 'qwerty123' },
    { title: 'Playing guitar', time: 30, completedToday: true, id: 'qiopjkl13' },
];

const sortingByTitle = (things: DataItem[]) => {
    return things.sort((a,b) => a.title.localeCompare(b.title));
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

    return (
        <View>
            <FlatList
                data={elements}
                renderItem={({ item, index }) => (
                    <Item
                        item={item} index={index} key={index}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    />
                ) }
            />
        </View>
    );
};

export default List;
