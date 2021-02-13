import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import {connect, ConnectedProps} from "react-redux";
import {SessionType} from "../models/session";
import {resetSessions} from "../redux/dispatch/sessions";
import {ThingType} from "../models/thing";

type Props = {};

const mapDispatchToProps = {
    resetSessionsProps: () => resetSessions(),
};

const mapStateToProps = (state: any, ownProps: Props) => {
    return {
        things: state.things,
        sessions: state.sessions,
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const ReportsComponent: React.FC<Props & ConnectedProps<typeof connector>> = (props) => {
  return (
    <View>
      <Text>Reports Component: props.sessions.length</Text>
      <Text>Reports Component: props.sessions.length</Text>
      <Text>Reports Component: props.sessions.length</Text>
      <Text>Reports Component: props.sessions.length</Text>
        <Button title={'Delete sessions'} onPress={props.resetSessionsProps}/>
      <Text>Reports Component: {props.sessions.length}</Text>
        <ScrollView>
        {props.sessions.map((s: SessionType, i: number) => {
            const thing = props.things.find((t: ThingType) => t.id === s.thingId);
            return (
                <View key={i}>
                    <Text>{s.id}</Text>
                    <Text>{thing.name}</Text>
                    <Text>{s.completed ? 'Y' : 'N'}</Text>
                    <Text>{s.elapsedMinutes}</Text>
                    <Text>{(new Date(s.date)).getTime()}</Text>
                </View>
            );
        })}
        </ScrollView>
    </View>
  );
};

export default connector(ReportsComponent);
