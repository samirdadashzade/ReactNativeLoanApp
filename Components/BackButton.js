import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BackButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={props.onPress}
        >
            <Text style={styles.text}>
                <Ionicons name="chevron-back" size={24} color="white" />
                Back
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      paddingHorizontal: 15,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: '#F0902B',
      marginTop: 20,
    },
    text: {
      color: "#FFFFFF",
      fontSize: 22,
      padding: 10,
      textAlign: "center"
    },
  });

export default BackButton;