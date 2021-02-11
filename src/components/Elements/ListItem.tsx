import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles/itemStyles';
import Card from './Card';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {daysOfTheWeek} from '../../utils';

type ItemProps = {
  item: DataItem;
  index: number;
  onPress: (id: string | number) => void;
  onLongPress: (id: string | number) => void;
};

export type DataItem = {
  id: string | number;
  color: string | undefined;
  headerText: string;
  subheaderText: string;
  completedToday: boolean;
  weeklyRecurrence?: boolean[];
};

const ListItem: React.FC<ItemProps> = (props: ItemProps) => {
  const {item, index, onPress, onLongPress} = props;
  const {
    headerText,
    subheaderText,
    completedToday,
    id,
    weeklyRecurrence,
  } = item;

  const renderDaysOfTheWeek = () => (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      {weeklyRecurrence &&
        weeklyRecurrence.map((day, i) => <Text key={i}>{day ? 'X' : 'O'}</Text>)}
    </View>
  );

  const colorStyle = StyleSheet.flatten([
    styles.colorWrapper,
    {backgroundColor: item.color},
  ]);

  return (
    <TouchableOpacity
      onPress={() => onPress(id)}
      key={index}
      onLongPress={() => onLongPress(id)}>
      <Card>
        <View style={styles.itemContainer}>
          <View style={colorStyle} />
          <View style={styles.itemTextBlock}>
            <Text style={styles.header}>{headerText}</Text>
            <Text style={styles.subheader}>{subheaderText}</Text>
          </View>
          <View>
            {completedToday ? (
              <Icon name={'check'} style={[styles.icon, styles.iconSuccess]} />
            ) : (
              <Icon name={'cancel'} style={[styles.icon, styles.iconError]} />
            )}
          </View>
        </View>
        <View>{renderDaysOfTheWeek()}</View>
      </Card>
    </TouchableOpacity>
  );
};

export default ListItem;
