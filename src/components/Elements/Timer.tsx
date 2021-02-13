import React from 'react';
import {View, Text, StyleSheet, Easing, Button} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Circle} from "react-native-svg";

type TimerProps = {
  show: boolean;
  max: number;
  onComplete: (elapsed: number) => void;
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
    if (!completed) {
      const count = counter + 1;
      if (max >= count) {
        setCompleted(false);
        setCounter(count);
        normalizer(count);
      } else {
        onCompleted();
      }
    } else {
      setStart(true);
    }
  };

  const textStyle = start ? styles.text : styles.textCompleted;

  const onCompleted = () => {
    props.onComplete(counter);
    setCounter(0);
    setCompleted(true);
    setStart(false);
  };

  const intervalStarter = () => {
    const interval = setInterval(timerLogic, 1000);

    return () => clearInterval(interval);
  };

  React.useEffect(() => {
    if (show) {
      setCompleted(false);
      return intervalStarter();
    }
  }, [counter, start, show]);

  const renderLabel = () => {
    if (counter === 0) {
      return '';
    }

    if (completed) {
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
      <Text style={textStyle}>{renderLabel()}</Text>
      <AnimatedCircularProgress
        size={350}
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
        style={styles.timer}
        padding={8}
        renderCap={({ center }) => (
            <>
              <Circle cx={center.x} cy={center.y} r="8" fill="black" />
              <Circle cx={center.x} cy={center.y} r="6" fill="white" />
            </>
          )}
      />
      {!completed && (<Button title={'STOP'} onPress={onCompleted}/>)}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 8,
    color: 'white',
    fontSize: 32,
  },
  textCompleted: {
    padding: 8,
    color: 'white',
    fontSize: 32,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    transform: [{rotateZ: '180deg'}, {rotateY: '180deg'}],
    marginTop: -250,
  },
});

export default Timer;
