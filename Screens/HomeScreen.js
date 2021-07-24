import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Header from '../Components/Header';
import { w, h } from '../Utils/Dimensions';


const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      <View style={styles.box}>
        <Text style={{...styles.textDefault, ...styles.textBalance}}>BALANCE</Text>
        <Text style={{...styles.textDefault, ...styles.textBalance}}>17.5</Text>
      </View>
      <View style={styles.first2butcont}>
        <View style={styles.leftbox2} onTouchEnd={() => props.navigation.navigate("EligibilityScreen")}>
          <Text style={styles.textDefault}>ELIGIBILITY</Text>
          <Text style={styles.textDefault}>CHECK</Text>
        </View>
        <View style={styles.rightbox2} onTouchEnd={() => props.navigation.navigate("CheckDebtStatusScreen")}>
          <Text style={styles.textDefault}>CHECK</Text>
          <Text style={styles.textDefault}>DEBT</Text>
          <Text style={styles.textDefault}>STATUS</Text>
        </View>
      </View>
      <View style={styles.last2butcont}>
        <View style={styles.leftbox3} onTouchEnd={() => props.navigation.navigate("ApplyLoanScreen")}>
          <Text style={styles.textDefault}>APPLY FOR</Text>
          <Text style={styles.textDefault}>A LOAN</Text>
        </View>
        <View style={styles.rightbox3} onTouchEnd={() => props.navigation.navigate("RepayLoanScreen")}>
          <Text style={styles.textDefault}>REPAY</Text>
          <Text style={styles.textDefault}>MY LOAN</Text>
        </View>
      </View>
      <View style={styles.bottominfo}>
        <View style={styles.bottombox}>
          <Text style={{...styles.textDefault, fontSize: 12}}>Demo Mobile Wallet App</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C378B'
  },
  textDefault: { 
    alignSelf: 'center', 
    color: '#FFFFFF', 
    fontWeight: 'bold', 
    fontFamily: 'ArialRoundedMTBold', 
    fontSize: 25 
  },
  textBalance: {
    fontSize: 30,
    marginTop: 30
  },
  first2butcont: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#F0902B',
    marginTop: 20,
  },
  last2butcont: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottominfo: {
    flex: 2,
    alignItems: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 1,
    marginLeft: 20,
    marginRight: 10,
    margin: 10,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#F0902B',
  },
  box: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    paddingLeft: 1,
    paddingRight: 1,
    borderWidth: 2,
    borderRadius: 0,
    borderColor: '#F0902B',
    margin: 5,
    width: w / 2,
    height: h
  },
  leftbox2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    paddingHorizontal: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#F0902B',
    marginLeft: 10,
    marginRight: 2,
    marginBottom: 2,
    width: w / 2,
    height: h,
  },
  rightbox2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    paddingHorizontal: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#F0902B',
    marginTop: 50,
    marginRight: 10,
    marginHorizontal: 2,
    width: w / 2,
    height: h
  },
  leftbox3: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#F0902B',
    marginLeft: 10,
    marginRight: 2,
    marginTop: 2,
    width: w / 2,
    height: h
  },
  rightbox3: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#F0902B',
    marginLeft: 2,
    marginRight: 10,
    marginTop: 2,
    width: w / 2,
    height: h
  },
  bottombox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#F0902B',
    marginBottom: 50,
    marginRight: 5,
    marginLeft: 5,
    width: w / 2,
    height: h
  },
});

export default HomeScreen;