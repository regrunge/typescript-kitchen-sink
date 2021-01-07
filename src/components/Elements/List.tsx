import React from 'react';
import {View, FlatList, Button} from "react-native";
import ListItem, { DataItem }  from './ListItem';
import { connect } from 'react-redux';
import {ThingType} from "../../models/thing";

type ListProps = {
    things: ThingType[],
};

const data: DataItem[] = [
    { headerText: 'Drawing', subheaderText: '20 minutes', completedToday: false, id: 'qwerty123' },
    { headerText: 'Playing guitar', subheaderText: '20 minutes', completedToday: true, id: 'qiopjkl13' },
];

const sortingByTitle = (things: DataItem[]) => {
    return things.sort((a,b) => a.headerText.localeCompare(b.headerText));
};

const List: React.FC<ListProps> = (props: ListProps) => {
    const mapThingsToListItem = () => {
        return props.things.map((t, index) => {
            return {
                headerText: t.name,
                subheaderText: `${t.durationMinutes} minutes`,
                completedToday: false,
                weeklyRecurrence: t.weeklyRecurrence,
                id: index,
            }
        });
    };

    const elements = sortingByTitle(mapThingsToListItem());

    const onPress = (id: string | number) => {
        const oldElements = [ ...elements ];
        const filter = oldElements.filter(item => item.id === id);
        const filtr2 = oldElements.filter(item => item.id !== id);
        const needle = filter[0];
        needle.completedToday = !needle.completedToday;
    };

    const onLongPress = (id: string | number) => {
        const oldElements = [ ...elements ];
        const filtered = oldElements.filter(item => item.id !== id);
    };

    const handleReset = () => {

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

const mapStateToProps = (state: any) => {
    return {
        things: state.things,
    }
};

export default connect(mapStateToProps)(List);
