import React, {useContext} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Header from '../Components/Header';
import SwitchButton from '../Components/SwitchButton';
import AuthContext from '../Redux/AuthContext';
import i18n from '../Localization/LocalStore';


const SettingsScreen = (props) => {
    const languages = [{ id: 1, name: "English", locale: "en" }, { id: 2, name: "Français", locale: "fr" }];
    const [selectedLang, setSelectedLang] = React.useState(1);
    const [enableNotification, setEnableNotification] = React.useState(true);
    const { state, authContext } = useContext(AuthContext);
    i18n.locale = state.locale;

    const changeLangHandler = (lang) => {
        setSelectedLang(lang.id);
        authContext.changeLang(lang.locale);
        i18n.locale = lang.locale;
    }

    return (
        <View style={styles.container}>
            <Header navigation={props.navigation} />
            <View style={styles.settingContainer}>
                <Text style={styles.header}>{i18n.t('language')}</Text>
                {languages.map(l => {
                    return (
                        <SwitchButton isEnabled={selectedLang == l.id}
                            title={l.name} key={l.id} 
                            toggleSwitch={() => changeLangHandler(l)} />
                    )
                })}

                <Text style={{ ...styles.header, marginTop: 40 }}>{i18n.t('notifications')}</Text>
                <SwitchButton isEnabled={enableNotification}
                    title={i18n.t('notifications')} toggleSwitch={() => setEnableNotification(p => !p)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C378B'
    },
    settingContainer: {
        padding: 15
    },
    header: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20
    }
});

export default SettingsScreen;