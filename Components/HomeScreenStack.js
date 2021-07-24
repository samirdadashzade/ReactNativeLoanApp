import React from "react";
import HomeScreen from '../Screens/HomeScreen';
import NavigationDrawerHeader from './NavigationDrawerHeader';
import EligibilityScreen from "../Screens/EligibilityCheck/EligibilityScreen";
import EligibilityScreenResult from "../Screens/EligibilityCheck/EligibilityScreenResult";
import ApplyLoanScreen from "../Screens/ApplyLoan/ApplyLoanScreen";
import EligibleLoansScreen from "../Screens/ApplyLoan/EligibleLoansScreen";
import LoanTenureScreen from "../Screens/ApplyLoan/LoanTenureScreen";
import LoanInfoScreen from "../Screens/ApplyLoan/LoanInfoScreen";
import LoanSuccessScreen from "../Screens/ApplyLoan/LoanSuccessScreen";
import CheckDebtStatusScreen from "../Screens/CheckDebtStatus/CheckDebtStatusScreen";
import RepayLoanScreen from "../Screens/RepayLoan/RepayLoanScreen";
import RepayLoanConfirmationScreen from "../Screens/RepayLoan/RepayLoanConfirmationScreen";
import RepayLoanSuccessScreen from "../Screens/RepayLoan/RepayLoanSuccessScreen";
import NotificationScreen from "../Screens/NotificationScreen";


// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
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
          name="HomeScreen"
          component={HomeScreen}
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
          name="EligibilityScreen"
          component={EligibilityScreen}
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
          name="EligibilityScreenResult"
          component={EligibilityScreenResult}
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
          name="ApplyLoanScreen"
          component={ApplyLoanScreen}
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
          name="EligibleLoansScreen"
          component={EligibleLoansScreen}
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
        <Stack.Screen
          name="CheckDebtStatusScreen"
          component={CheckDebtStatusScreen}
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
          name="RepayLoanScreen"
          component={RepayLoanScreen}
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
          name="RepayLoanConfirmationScreen"
          component={RepayLoanConfirmationScreen}
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
          name="RepayLoanSuccessScreen"
          component={RepayLoanSuccessScreen}
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

  export default HomeScreenStack;