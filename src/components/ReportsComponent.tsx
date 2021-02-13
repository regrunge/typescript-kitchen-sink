import React from 'react';
import {View, Text} from 'react-native';
import {connect, ConnectedProps} from "react-redux";

type Props = {};

const mapStateToProps = (state: any, ownProps: Props) => {
    return {
        things: state.things,
        sessions: state.sessions,
    };
};

const connector = connect(mapStateToProps);

const ReportsComponent: React.FC<Props & ConnectedProps<typeof connector>> = (props) => {
    console.log(props);
  return (
    <View>
      <Text>Reports Component: props.sessions.length</Text>
      <Text>Reports Component: props.sessions.length</Text>
      <Text>Reports Component: props.sessions.length</Text>
      <Text>Reports Component: props.sessions.length</Text>
      {/*<Text>Reports Component: {props.sessions.length}</Text>*/}
    </View>
  );
};

export default connector(ReportsComponent);
