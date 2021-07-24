import React from "react";
import HistoryScreen from '../Screens/HistoryScreen';
import NavigationDrawerHeader from './NavigationDrawerHeader';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HistoryScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator initialRouteName="HistoryScreen">
        <Stack.Screen
          name="HistoryScreen"
          component={HistoryScreen}
          options={{
            headerLeft: () => (
              <NavigationDrawerHeader navigationProps={navigation} />
            ),
            headerStyle: {
              backgroundColor: '#2C378B', //Set Header color
              height: 0, 
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    );
  };

  export default HistoryScreenStack;