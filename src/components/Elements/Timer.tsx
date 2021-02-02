import React from 'react';
import {View, Text, StyleSheet, Easing} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Button} from 'react-native-elements';


type TimerProps = {
  show: boolean;
  max: number;
  onComplete: () => void;
};

const Timer: React.FC<TimerProps> = (props: TimerProps) => {
  const {show, max} = props;

  const [counter, setCounter] = React.useState(0);
  const [normalizedCounter, setNormalizedCounter] = React.useState(0);
  const [start, setStart] = React.useState(true);
  const [completed, setCompleted] = React.useState(false);

  const normalizer = (cntr: number) => {
    const normalized = (cntr * 100) / max;
    setNormalizedCounter(normalized);
  };

  const timerLogic = () => {
    if (start) {
      const count = counter + 1;
      if (max >= count) {
        setCounter(count);
        normalizer(count);
      } else {
        props.onComplete();
        setStart(false);
      }
    }
  };

  const textStyle = start ? styles.text : styles.textCompleted;

  const onCompleted = () => {
    console.log('onAnimationComplete');
    setCompleted(true);
    setStart(false);
  };

  React.useEffect(() => {
    const interval = setInterval(timerLogic, 1000);

    return () => clearInterval(interval);
  }, [counter, start]);

  const renderLabel = () => {
    if (counter === 0) {
      return 'GO!';
    }

    if (counter === max) {
      return 'GREAT!';
    }
    const seconds = max - counter;

    if (seconds >= 60) {
      return Math.floor(seconds / 60) + 'm' + ' ' + (seconds % 60) + 's';
    }

    return seconds + 's';
  };

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={250}
        width={2}
        backgroundWidth={4}
        fill={normalizedCounter}
        tintColor={'#e3c2e5'}
        tintColorSecondary={'#859dac'}
        backgroundColor="#555555"
        rotation={-90}
        lineCap={'round'}
        arcSweepAngle={180}
        duration={1000}
        easing={Easing.linear}
        style={{transform: [{rotateZ: '180deg'}, {rotateY: '180deg'}]}}
      />

      <Text style={textStyle}>{renderLabel()}</Text>

      <Button
        onPress={() => {
          setStart(!start);
          setCounter(0);
        }}
        title={'GO'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 8,
    color: 'black',
    fontSize: 64,
  },
  textCompleted: {
    padding: 8,
    color: '#006688',
    fontSize: 64,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Timer;
