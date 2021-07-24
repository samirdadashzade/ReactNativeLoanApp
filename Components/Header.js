import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {logo} from '../Utils/Logo';
import { w, h } from '../Utils/Dimensions';

const Header = ({navigation}) => {
    return (
        <View style={styles.parentBox}>
            <Image
                style={styles.logo}
                resizeMode="stretch"
                source={logo} />
            <Feather name="bell" size={23} color="white" onPress={() => navigation.navigate("NotificationScreen")} />
        </View>
    );
}

const styles = StyleSheet.create({
    parentBox: {
        alignSelf: 'flex-end',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        width: '66%',
        height: 100,
        paddingRight: 10,
      },
      logo: {
        width: w / 3,
        height: h / 3
      },
});

export default Header;