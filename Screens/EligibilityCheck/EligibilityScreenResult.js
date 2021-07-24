import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable
} from 'react-native';
import TextBox from '../../Components/TextBox';
import Header from '../../Components/Header';


const EligibilityScreenResult = (props) => {
  const description = "Dear customer, you are eligible for the loan amounts \n20 USD, 30 USD, 40 USD, 50 USD.";

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      <View style={styles.bottomBox}>
        <TextBox>
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
});

export default EligibilityScreenResult;