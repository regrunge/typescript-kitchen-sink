import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainComponent from "../components/MainComponent";
import CrudThingComponent from "../components/CrudThingComponent";
import ReportsComponent from "../components/ReportsComponent";

const Stack = createStackNavigator();

export type RootStackParamList = {
    Main: undefined;
    CRUD: { id?: string };
    Reports: undefined;
};

const MainStack: React.FC<RootStackParamList> = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={MainComponent} />
            <Stack.Screen name="CRUD" component={CrudThingComponent} />
            <Stack.Screen name="Reports" component={ReportsComponent} />
        </Stack.Navigator>
    );
};

export default MainStack;
