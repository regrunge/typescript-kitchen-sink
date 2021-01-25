import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type TimerProps = {
    show: boolean;
    max: number;
    onComplete: () => void;
}

const Timer: React.FC<TimerProps> = (props: TimerProps) => {
    const { show, max } = props;
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const count = counter + 1;
            if (max >= count ){
                setCounter(count);
            } else {
                props.onComplete();
                clearInterval(interval);
                setCounter(0);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [counter]);

    return (
        <>
            {show && (
                <View>
                    <Text>I'm a timer</Text>
                    <Text style={styles.text}>{counter}</Text>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        borderWidth: 1,
        padding: 8,
        borderRadius: 8,
        borderColor: '#aaaaff',
        fontSize: 64,
    },
});

export default Timer;
