// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React, {useContext} from 'react';

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
import i18n from '../Localization/LocalStore';


const Drawer = createDrawerNavigator();

const DrawerNavigatorRoutes = (props) => {
  const { state } = useContext(AuthContext);
  i18n.locale = state.locale;

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
        options={{ drawerLabel: i18n.t("home"), title: "HomeScreen" }}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="ActionsScreenStack"
        options={{ drawerLabel: i18n.t("actions") }}
        component={ActionsScreenStack}
      />
      <Drawer.Screen
        name="History"
        options={{ drawerLabel: i18n.t("history") }}
        component={HistoryScreenStack}
      />
      <Drawer.Screen
        name="Settings"
        options={{ drawerLabel: i18n.t("settings") }}
        component={SettingScreenStack}
      />
      <Drawer.Screen
        name="About Simbrella"
        options={{ drawerLabel: i18n.t("aboutSimbrella") }}
        component={AboutScreenStack}
      />
      <Drawer.Screen
        name="Terms and Conditions"
        options={{ drawerLabel: i18n.t("tc") }}
        component={TermsConditionScreenStack}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default DrawerNavigatorRoutes;