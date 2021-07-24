import React, { useState, createRef } from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  Keyboard,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

import AuthContext from '../Redux/AuthContext';

import { w, h } from '../Utils/Dimensions';
import { logo } from '../Utils/Logo';

const SignInScreen = ({navigation}) => {
  const [phone, setPhone] = React.useState('');
  const [pin, setPin] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  // const signInHandler = async() => {
  //   try {
  //     axios.get("https://httpbin.org/get").then(res => {
  //       console.log("Response", res.data);
  //     }).catch(error => {
  //       Alert.alert("Error", error);
  //     });
  //   } catch (ex) {
  //     Alert.alert("Catch Error", "Exception");
  //   }
  // }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <StatusBar barStyle='light-content' hidden={false} />
        <View style={styles.logo}>
          <Image
            style={styles.logo}
            resizeMode="stretch"
            source={logo} />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}

            placeholder="Enter Phone Number"
            placeholderTextColor="#FFFFFF"
            autoCapitalize="none"
            keyboardType="numeric"
            returnKeyType="next"
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
            onChangeText={setPhone}
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}

            placeholder="Enter PIN" //12345
            placeholderTextColor="#FFFFFF"
            keyboardType="numeric"

            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            underlineColorAndroid="#f000"
            returnKeyType="next"
            onChangeText={setPin}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => signIn({ phone: phone, pin: pin })}
          >
            <Text style={styles.singinButton}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  logo: {
    width: w,
    height: h
  },
  container: {
    flex: 1,
    backgroundColor: '#2C378B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#F0902B',
    marginTop: 20,
  },
  logo: {
    width: w / 1.3,
    height: h / 1.3,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  logocontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#2C378B',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#F0902B',
  },
  singinButton: {
    color: "#FFFFFF",
    fontSize: 22,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default SignInScreen;