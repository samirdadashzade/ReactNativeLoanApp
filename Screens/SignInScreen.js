import React, { useContext, createRef } from 'react';
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
  Alert,
} from 'react-native';
import AuthContext from '../Redux/AuthContext';
import i18n from '../Localization/LocalStore';
import axios from 'axios';

import { w, h } from '../Utils/Dimensions';
import { logo } from '../Utils/Logo';


const SignInScreen = ({ navigation }) => {
  const [phone, setPhone] = React.useState('994556549492');
  const [pin, setPin] = React.useState('2949');
  const { state, authContext } = useContext(AuthContext);
  i18n.locale = state.locale;

  const signInHandler = async () => {
    // authContext.signIn("token");
    try {
      axios.post("https://mobi.simsight.net:14443/authorization/login_app",
        { "phone": phone, "pin": pin, "finishOtherSession": true }).then(res => {
          if (res.data.errCode == 0) {
            const token = res.data.payload.appToken;
            authContext.signIn(token);
          }
          else {
            Alert.alert("Error", res.data.ErrMessage);
          }
        }).catch(error => {
          Alert.alert("Error", error);
        });
    } catch (ex) {
      Alert.alert("Catch Error", "Exception");
    }
  }

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
            value={phone}
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
            value={pin}
            onChangeText={setPin}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={signInHandler}
          >
            <Text style={styles.singinButton}>{i18n.t('signin')}</Text>
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