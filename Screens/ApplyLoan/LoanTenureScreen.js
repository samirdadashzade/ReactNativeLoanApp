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


const LoanTenureScreen = (props) => {
  const description = "Dear customer, please choose the loan tenure";
  const [tenures, setTenures] = 
    React.useState(["7 days - 8%", "14 days - 10%", "30 days - 12%", "2 months - 15% (total)"]);

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      <View style={styles.bottomBox}>
        <TextBox>
          <Text>{description}</Text>
          <View style={styles.buttonContainer}>
            {tenures.map((t, i) => {
              // const activeButtonStyle = i === 1 ? styles.activeButton : null;
              // const activeButtonTextStyle = i === 1 ? styles.activeButtonText : null;

              return (<Pressable style={{...styles.button}} key={t}
                onPress={() => { 
                  props.navigation.navigate("LoanInfoScreen", 
                  {loanAmount: props.route.params.loanAmount, loanTenure: t}) }}>
                <Text style={{...styles.buttonText}}>{t}</Text>
              </Pressable>)
            })}
          </View>
        </TextBox>
      </View>
      <View style={styles.backButtonContainer}>
        <BackButton onPress={() => {
          props.navigation.navigate("EligibleLoansScreen")
        }} />
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
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 3,
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 5
  },
  activeButton: {
    backgroundColor: "green"
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
    fontSize: 14,
    textAlign: "center"
  },
  activeButtonText: {
    color: "white"
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

export default LoanTenureScreen;