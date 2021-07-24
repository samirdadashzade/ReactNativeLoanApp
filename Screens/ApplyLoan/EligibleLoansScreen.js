import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable
} from 'react-native';
import TextBox from '../../Components/TextBox';
import BackButton from '../../Components/BackButton';
import Header from '../../Components/Header';


const EligibleLoansScreen = (props) => {
  const description = "Dear customer, you are eligible for the loan amounts below:";
  const [loans, setLoans] = React.useState([20, 30, 40, 50]);

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      <View style={styles.bottomBox}>
        <TextBox>
          <Text style={styles.text}>{description}</Text>
          <View style={styles.buttonContainer}>
            {loans.map(l => {
              return (<Pressable style={styles.button} key={l}
                onPress={() => { props.navigation.navigate("LoanTenureScreen", {loanAmount: l}) }}>
                <Text style={styles.buttonText}>{l} USD</Text>
              </Pressable>)
            })}
          </View>
        </TextBox>
      </View>
      <View style={styles.backButtonContainer}>
        <BackButton onPress={() => { props.navigation.navigate("ApplyLoanScreen") }} />
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
    // flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginTop: 20
  },
  button: {
    backgroundColor: '#22d3ee',
    alignSelf: 'flex-start',
    paddingHorizontal: 50,
    paddingVertical: 25,
    borderRadius: 3,
    marginBottom: 5
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
  },
  backButtonContainer: {
    flex: 1,
    width: "50%",
    alignSelf: "center"
  },
  text: {
    color: 'black',
    marginTop: 5,
    fontSize: 19,
  },
});

export default EligibleLoansScreen;