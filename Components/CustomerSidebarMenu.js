// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useContext } from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import i18n from '../Localization/LocalStore';


export default function CustomSidebarMenu(props) {
  // const { state } = useContext(AuthContext);

  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{fontSize: 25, color: '#307ecc'}}>
            {'JD'}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>
          John Doe
        </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({color}) => 
            <Text style={{color: '#d8d8d8'}}>
              {i18n.t('logout')}
            </Text>
          }
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              i18n.t('logout'),
              i18n.t('logoutConfirmation'),
              [
                {
                  text: i18n.t('yes'),
                  onPress: () => {
                    // props.onSignOut();
                    return null;
                  },
                },
                {
                  text: i18n.t('no'),
                  onPress: () => {
                    // props.onSignOut();
                    return null;
                  },
                }
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2C378B',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#2C378B',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});

// export default CustomSidebarMenu;