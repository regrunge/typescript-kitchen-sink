import React from 'react';
import { ListItem, Icon, withTheme, COLOR } from 'react-native-material-ui';

type ItemProps = {
    item: DataItem;
    index: number;
    theme: any;
    onPress?: (index: string) => void;
    onLongPress?: (index: string) => void;
};

type DataItem = {
    id: string;
    title: string;
    time: number;
    completedToday: boolean;
}

const Item: React.FC<ItemProps> = (props: ItemProps) => {
    const { item, index, theme, onPress, onLongPress } = props;
    const { title, time, completedToday, id } = item;
    return (
        <ListItem
            key={index}
            centerElement={
                {
                    primaryText: title,
                    secondaryText: `${time} minutes`,
                }
            }
            rightElement={completedToday ?
                (<Icon name={'check'} color={theme.palette.accentColor}/>) :
                (<Icon name={'cancel'} color={theme.palette.secondaryColor}/>)
            }
            onPress={() => onPress && onPress(id)}
            onLongPress={() => onLongPress && onLongPress(id)}
        />
        );
};

export default withTheme(Item);
