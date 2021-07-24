import React from "react";
import TermsConditionScreen from '../Screens/TermsConditionsScreen';
import NavigationDrawerHeader from './NavigationDrawerHeader';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const TermsConditionScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator initialRouteName="TermsConditionScreen">
        <Stack.Screen
          name="TermsConditionScreen"
          component={TermsConditionScreen}
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

  export default TermsConditionScreenStack;