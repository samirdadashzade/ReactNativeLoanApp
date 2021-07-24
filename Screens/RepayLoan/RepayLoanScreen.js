import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput
} from 'react-native';
import TextBox from '../../Components/TextBox';
import Header from '../../Components/Header';


const RepayLoanScreen = (props) => {
  const [dueAmount, setDueAmount] = React.useState(22);
  const [amountToPay, setAmountToPay] = React.useState("");

  const description = `You have an outstanding amount of ${dueAmount} USD which is due on 23.08.2021. \nType an amount you would like to pay back:`;

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      <View style={styles.bottomBox}>
        <TextBox>
          <Text style={styles.text}>{description}</Text>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter an amount to pay"
              placeholderTextColor="#FFFFFF"
              autoCapitalize="none"
              keyboardType="numeric"
              returnKeyType="next"
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              onChangeText={setAmountToPay}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Pressable style={{ ...styles.button, ...styles.yesButton }}
              onPress={() => { props.navigation.navigate("RepayLoanConfirmationScreen", 
              { dueAmount: dueAmount, amountToPay: amountToPay }) }}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
            <Pressable style={{ ...styles.button, ...styles.noButton }}
              onPress={() => { props.navigation.navigate("HomeScreen") }}>
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
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#F0902B',
  },
});

export default RepayLoanScreen;