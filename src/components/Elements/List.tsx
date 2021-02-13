import React from 'react';
import {View, FlatList, Button} from 'react-native';
import ListItem, {DataItem} from './ListItem';
import {connect} from 'react-redux';
import {ThingType} from '../../models/thing';

type ListProps = {
  things: ThingType[];
  navigation: any;
  onSelected: (thing: string | number | null) => void;
  onDelete: (thing: string | number | null) => void;
};

const sortingByTitle = (things: DataItem[]) => {
  return things.sort((a, b) => a.headerText.localeCompare(b.headerText));
};

const List: React.FC<ListProps> = (props: ListProps) => {
  const mapThingsToListItem = () => {
    return props.things.map((t, index) => {
      return {
        headerText: t.name,
        subheaderText: `${t.durationMinutes} minutes`,
        completedToday: false,
        weeklyRecurrence: t.weeklyRecurrence,
        color: t.color,
        id: t.id,
      };
    });
  };

  const elements = sortingByTitle(mapThingsToListItem());

  const onPress = (id: string | number) => {
    const oldElements = [...elements];
    const needle = oldElements.find((item) => item.id === id);

    props.onSelected(needle?.id || null);
  };

  const onLongPress = (id: string | number) => {
    props.navigation.navigate('CRUD', {id});
  };

  const onDelete = (id: string | number) => {
    // props.onDelete(id);
    // TODO: Seva?
  };

  const handleReset = () => {};

  return (
    <View>
      <FlatList
        data={elements}
        renderItem={({item, index}) => (
          <ListItem
            item={item}
            index={index}
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            onDelete={onDelete}
          />
        )}
      />
      <Button title={'reset'} onPress={handleReset} />
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    things: state.things,
  };
};

export default connect(mapStateToProps)(List);
