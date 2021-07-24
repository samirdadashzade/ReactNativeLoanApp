import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Header from '../Components/Header';

export default function AboutScreen(props) {
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.simbrella.com');
    setResult(result);
  };

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      <View style={styles.box}>
        <TouchableOpacity style={styles.button} onPress={_handlePressButtonAsync}>
          <Text style={styles.openButton}>Open Simbrella in Browser</Text>
        </TouchableOpacity>
      </View>

      {result && result.type !== "cancel" ? <Text>{result && JSON.stringify(result)}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C378B',
  },
  box: {
    flex: 3,
    alignSelf: 'center'
  },
  button: {
    color: 'white',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#F0902B',
    marginTop: 20,
  },
  openButton: {
    color: "#FFFFFF",
    fontSize: 20,
    padding: 10
  }
});


