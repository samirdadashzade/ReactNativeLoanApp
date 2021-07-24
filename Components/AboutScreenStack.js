import React from "react";
import NavigationDrawerHeader from './NavigationDrawerHeader';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import AboutScreen from "../Screens/AboutScreen";

const Stack = createStackNavigator();

const AboutScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator initialRouteName="About Screen">
        <Stack.Screen
          name="About Screen"
          component={AboutScreen}
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

  export default AboutScreenStack;