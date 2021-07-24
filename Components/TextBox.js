import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function TextBox(props) {
    return (
        <View style={{...styles.container, ...props.containerStyle}}>
            <View style={styles.topContainer}>
                <View style={styles.metaContainer}>
                    {props.children}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderRadius: 5,
        alignSelf: 'center',
        width: 375,
        maxWidth: '100%',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    metaContainer: {
        justifyContent: 'space-between',
        flex: 1,
    },
    description: {
        color: 'black',
        marginTop: 5,
        fontSize: 20,
    },
});