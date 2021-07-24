import React from "react";
import NavigationDrawerHeader from './NavigationDrawerHeader';
import SettingScreen from "../Screens/SettingScreen";


// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const SettingScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator initialRouteName="SettingScreen">
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
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

  export default SettingScreenStack;