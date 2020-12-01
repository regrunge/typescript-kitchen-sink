import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles/itemStyles';
import Card from './Card';

type ItemProps = {
    item: DataItem;
    index: number;
    onPress: (id: string) => void;
    onLongPress: (id: string) => void;
};

export type DataItem = {
    id: string;
    headerText: string;
    subheaderText: string;
    completedToday: boolean;
}

const ListItem: React.FC<ItemProps> = (props: ItemProps) => {
    const { item, index, onPress, onLongPress } = props;
    const { headerText, subheaderText, completedToday, id } = item;

    return (
        <TouchableOpacity onPress={() => onPress(id)} key={index} onLongPress={() => onLongPress(id)}>
           <Card>
               <View style={styles.itemContainer}>
                   <View style={styles.itemTextBlock}>
                       <Text style={styles.header}>
                           {headerText}
                       </Text>
                       <Text style={styles.subheader}>
                           {subheaderText}
                       </Text>
                   </View>
                   <View>
                       {completedToday ?
                           (<Icon name={'check'} style={[styles.icon, styles.iconSuccess]}/>) :
                           (<Icon name={'cancel'} style={[styles.icon, styles.iconError]}/>)
                       }
                   </View>
               </View>
           </Card>

        </TouchableOpacity>
    );
};


export default ListItem;
