import React from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';

const SwitchButton = (props) => {
    return (
        <View style={{...styles.switchContainer, ...props.containerStyle}}>
            <Text style={styles.title}>{props.title}</Text>

            <Switch trackColor={{ false: "red", true: "green" }}
                thumbColor={"#fff"}
                ios_backgroundColor="maroon"
                onValueChange={props.toggleSwitch}
                value={props.isEnabled} />
        </View>
    )
}

const styles = StyleSheet.create({
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    title: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 20
    }
})

export default SwitchButton;