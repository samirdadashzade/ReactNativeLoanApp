import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable
} from 'react-native';
import TextBox from '../../Components/TextBox';
import Header from '../../Components/Header';


const CheckDebtStatusScreen = (props) => {
  const description = `You have an outstanding amount of 22 USD which is due on 23.08.2021.`;

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      <View style={styles.bottomBox}>
        <TextBox>
          <Text style={{...styles.text, ...styles.header}}>Debt status:</Text>
          <Text style={styles.text}>{description}</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={{ ...styles.button, ...styles.yesButton }}
              onPress={() => { props.navigation.navigate("HomeScreen") }}>
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
  bottomBox: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20
  },
  button: {
    backgroundColor: '#22d3ee',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 3,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
  },
  yesButton: {
    backgroundColor: "green"
  },
  noButton: {
    alignSelf: 'flex-end',
    backgroundColor: "red"
  },
  text: {
    color: 'black',
    marginTop: 5,
    fontSize: 19,
  },
  header: {
    fontWeight: "bold",
    fontSize: 23,
    marginBottom: 10
  }
});

export default CheckDebtStatusScreen;