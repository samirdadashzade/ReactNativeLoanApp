import React from 'react';
import { View, StatusBar, Image, StyleSheet } from 'react-native';

import { w, h } from '../Utils/Dimensions';
import { logo } from '../Utils/Logo';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Image
                style={styles.logo}
                resizeMode="stretch"
                source={logo} />
            <View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: w / 1.3,
        height: h / 1.3,
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#2C378B',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default SplashScreen;