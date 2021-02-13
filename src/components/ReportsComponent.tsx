import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect, ConnectedProps} from "react-redux";
import {SessionType} from "../models/session";

type Props = {};

const mapStateToProps = (state: any, ownProps: Props) => {
    return {
        things: state.things,
        sessions: state.sessions,
    };
};

const connector = connect(mapStateToProps);

const ReportsComponent: React.FC<Props & ConnectedProps<typeof connector>> = (props) => {
  return (
    <View>
      <Text>Reports Component: props.sessions.length</Text>
      <Text>Reports Component: props.sessions.length</Text>
      <Text>Reports Component: props.sessions.length</Text>
      <Text>Reports Component: props.sessions.length</Text>
      <Text>Reports Component: {props.sessions.length}</Text>
        <ScrollView>
        {props.sessions.map((s: SessionType, i: number) => {
            return (
                <View key={i}>
                    <Text>{s.id}</Text>
                    <Text>{s.thingId}</Text>
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
