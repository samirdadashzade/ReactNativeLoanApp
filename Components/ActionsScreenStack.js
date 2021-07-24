import React from "react";
import ActionsScreen from '../Screens/Actions/ActionsScreen';
import NavigationDrawerHeader from './NavigationDrawerHeader';
import DecreaseBalanceScreen from '../Screens/Actions/DecreaseBalanceScreen';
import TranscationCompletionScreen from '../Screens/Actions/TranscationCompletionScreen';
import TransactionConfirmationScreen from '../Screens/Actions/TransactionConfirmationScreen';
import LoanTenureScreen from '../Screens/Actions/LoanTenureScreen';
import LoanInfoScreen from '../Screens/Actions/LoanInfoScreen';
import LoanSuccessScreen from '../Screens/Actions/LoanSuccessScreen';


// Import Navigators from React Navigation
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ActionsScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="ActionsScreen">
      <Stack.Screen
        name="ActionsScreen"
        component={ActionsScreen}
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
      <Stack.Screen
        name="DecreaseBalanceScreen"
        component={DecreaseBalanceScreen}
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
      <Stack.Screen
        name="TranscationCompletionScreen"
        component={TranscationCompletionScreen}
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
      <Stack.Screen
        name="TransactionConfirmationScreen"
        component={TransactionConfirmationScreen}
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
      <Stack.Screen
        name="LoanTenureScreen"
        component={LoanTenureScreen}
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
      <Stack.Screen
        name="LoanInfoScreen"
        component={LoanInfoScreen}
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
      <Stack.Screen
        name="LoanSuccessScreen"
        component={LoanSuccessScreen}
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

export default ActionsScreenStack;