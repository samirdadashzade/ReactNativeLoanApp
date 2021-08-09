import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable
} from 'react-native';
import TextBox from '../../Components/TextBox';
import Header from '../../Components/Header';
import AuthContext from '../../Redux/AuthContext';
import i18n from '../../Localization/LocalStore';

const EligibilityScreen = (props) => {
  const { state } = useContext(AuthContext);
  i18n.locale = state.locale;
  const description = i18n.t('eligibilityDesc');

  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} />
      <View style={styles.bottomBox}>
        <TextBox>
          <Text style={styles.text}>{description}</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={{ ...styles.button, ...styles.yesButton }}
              onPress={() => {props.navigation.navigate("EligibilityScreenResult")}}>
              <Text style={styles.buttonText}>{i18n.t('yes')}</Text>
            </Pressable>
            <Pressable style={{ ...styles.button, ...styles.noButton }} 
              onPress={() => {props.navigation.navigate("HomeScreen")}}>
              <Text style={styles.buttonText}>{i18n.t('no')}</Text>
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

export default EligibilityScreen;