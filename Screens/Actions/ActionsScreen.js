import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Header from '../../Components/Header';
import { w, h } from '../../Utils/Dimensions';


const ActionsScreen = (props) => {
    return (
        <View style={styles.container}>
            <Header navigation={props.navigation} />
            <View style={styles.box}>
                <Text style={{ ...styles.textDefault, ...styles.textBalance }}>BALANCE</Text>
                <Text style={{ ...styles.textDefault, ...styles.textBalance }}>17.5</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button} onTouchEnd={() => props.navigation.navigate("IncreaseBalanceScreen")}>
                    <Text style={styles.textDefault}>Increase Balance</Text>
                </View>
                <View style={styles.button} onTouchEnd={() => props.navigation.navigate("DecreaseBalanceScreen")}>
                    <Text style={styles.textDefault}>Decrease Balance</Text>
                </View>
                <View style={styles.button} onTouchEnd={() => props.navigation.navigate("TranscationCompletionScreen")}>
                    <Text style={styles.textDefault}>Transaction Completion</Text>
                    <Text style={styles.textDefault}>(Insufficient Balance)</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C378B'
    },
    textDefault: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        fontSize: 25
    },
    textBalance: {
        fontSize: 30,
        marginTop: 30
    },
    buttonContainer: {
        flex: 5,
    },
    button: {
        // flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingHorizontal: 1,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#F0902B',
        marginBottom: 20,
        width: w * 0.8,
        padding: 30
    },
    box: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 0,
        borderColor: '#F0902B',
        marginBottom: 25,
        width: w / 2,
    },
});

export default ActionsScreen;