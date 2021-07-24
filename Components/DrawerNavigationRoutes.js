// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import Screens
import { StyleSheet } from 'react-native';
import CustomSidebarMenu from './CustomerSidebarMenu';
import HomeScreenStack from './HomeScreenStack';
import AuthContext from '../Redux/AuthContext';
import AboutScreenStack from './AboutScreenStack';
import HistoryScreenStack from './HistoryScreenStack';
import SettingScreenStack from './SettingScreenStack';
import TermsConditionScreenStack from './TermsConditionScreenStack';
import ActionsScreenStack from './ActionsScreenStack';


const Drawer = createDrawerNavigator();

const DrawerNavigatorRoutes = (props) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        itemStyle: { marginVertical: 5 },
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={CustomSidebarMenu}
    >
      <Drawer.Screen
        name="msisdn"
        options={{ drawerLabel: 'MSISDN', title: "HomeScreen" }}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="ActionsScreenStack"
        options={{ drawerLabel: 'Actions' }}
        component={ActionsScreenStack}
      />
      <Drawer.Screen
        name="History"
        options={{ drawerLabel: 'History' }}
        component={HistoryScreenStack}
      />
      <Drawer.Screen
        name="Settings"
        options={{ drawerLabel: 'Settings' }}
        component={SettingScreenStack}
      />
      <Drawer.Screen
        name="About Simbrella"
        options={{ drawerLabel: 'About Simbrella' }}
        component={AboutScreenStack}
      />
      <Drawer.Screen
        name="Terms and Conditions"
        options={{ drawerLabel: 'Terms and Conditions' }}
        component={TermsConditionScreenStack}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default DrawerNavigatorRoutes;