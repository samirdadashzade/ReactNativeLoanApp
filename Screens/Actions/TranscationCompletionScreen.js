import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native';
import Header from '../../Components/Header';
import TextBox from '../../Components/TextBox';
import { w, h } from '../../Utils/Dimensions';


const TranscationCompletionScreen = (props) => {
    return (
        <View style={styles.container}>
            <Header navigation={props.navigation} />
            <View style={styles.box}>
                <Text style={{ ...styles.textDefault, ...styles.textBalance }}>BALANCE</Text>
                <Text style={{ ...styles.textDefault, ...styles.textBalance }}>17.5</Text>
            </View>
            <View style={styles.textboxContainer}>
                <TextBox>
                    <Text style={styles.text}>
                        Purchase an item.
                    </Text>
                    <Text style={styles.text}>
                        37.50 USD.
                    </Text>
                    <Text style={styles.text}>
                        (Price should be 20 USD more than customer balance)
                    </Text>
                    <View style={styles.buttonContainer}>
                        <Pressable style={{ ...styles.button, ...styles.yesButton }}
                            onPress={() => { props.navigation.navigate("TransactionConfirmationScreen") }}>
                            <Text style={styles.buttonText}>OK</Text>
                        </Pressable>
                    </View>
                </TextBox>
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
    button: {
        backgroundColor: 'white',
        alignSelf: 'center',
        paddingVertical: 15,
        borderRadius: 3,
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        marginTop: 30
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
        fontSize: 14,
        textAlign: "center"
    },
    textboxContainer: {
        flex: 3,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 50
    },
    text: {
        color: 'black',
        marginTop: 5,
        fontSize: 19,
        textAlign: "center"
    },
    box: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 0,
        borderColor: '#F0902B',
        width: w / 2,
    },
});

export default TranscationCompletionScreen;