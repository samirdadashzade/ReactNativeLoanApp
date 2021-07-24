import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable
} from 'react-native';
import TextBox from '../../Components/TextBox';
import Header from '../../Components/Header';


const ApplyLoanScreen = (props) => {
  const description = "Your eligibility will be checked based on your transactional data. Do you agree to share your data for that purpose? \nYou can read Terms and Conditions by clicking on the left menu.";

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      <View style={styles.bottomBox}>
        <TextBox>
          <Text style={styles.text}>{description}</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={{ ...styles.button, ...styles.yesButton }}
              onPress={() => {props.navigation.navigate("EligibleLoansScreen")}}>
              <Text style={styles.buttonText}>Yes</Text>
            </Pressable>
            <Pressable style={{ ...styles.button, ...styles.noButton }} 
              onPress={() => {props.navigation.navigate("HomeScreen")}}>
              <Text style={styles.buttonText}>No</Text>
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

export default ApplyLoanScreen;