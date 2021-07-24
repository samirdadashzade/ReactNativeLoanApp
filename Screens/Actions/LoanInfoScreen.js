import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable
} from 'react-native';
import TextBox from '../../Components/TextBox';
import Header from '../../Components/Header';


const LoanInfoScreen = (props) => {
  const description = `Loan amount: ${props.route.params.loanAmount} USD\nService fee: 2 USD\nLoan tenure: ${props.route.params.loanTenure}
  \nBy pressing "Confirm" button, you are agreeing with TC. For full TC, please visit "About" section in the left menu.`;

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      <View style={styles.bottomBox}>
        <TextBox>
          <Text style={{...styles.text, ...styles.header}}>Loan Information:</Text>
          <Text style={styles.text}>{description}</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={{ ...styles.button, ...styles.yesButton }}
              onPress={() => { props.navigation.navigate("LoanSuccessScreen") }}>
              <Text style={styles.buttonText}>Confirm</Text>
            </Pressable>
            <Pressable style={{ ...styles.button, ...styles.noButton }}
              onPress={() => { props.navigation.navigate("ActionsScreen") }}>
              <Text style={styles.buttonText}>Cancel</Text>
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

export default LoanInfoScreen;