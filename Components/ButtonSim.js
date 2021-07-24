import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonSim = (props) => {
    return (
        <View>
            <TouchableOpacity
                style={{...styles.button, ...props.buttonStyle}}
                onPress={props.onPress}>
                <Text style={{...styles.text, ...props.textStyle}}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        color: 'white',
        padding: 25,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#F0902B',
        marginTop: 20,
        justifyContent: "center"
    },
    text: {
        color: "#FFFFFF",
        fontSize: 22
    }
});

export default ButtonSim;