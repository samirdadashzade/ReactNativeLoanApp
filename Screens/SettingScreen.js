import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Header from '../Components/Header';
import SwitchButton from '../Components/SwitchButton';

const SettingsScreen = (props) => {
    const languages = [{ id: 1, name: "English" }, { id: 2, name: "French" }];
    const [selectedLang, setSelectedLang] = React.useState(1);
    const [enableNotification, setEnableNotification] = React.useState(true);

    return (
        <View style={styles.container}>
            <Header navigation={props.navigation} />
            <View style={styles.settingContainer}>
                <Text style={styles.header}>Language</Text>
                {languages.map(l => {
                    return (
                        <SwitchButton isEnabled={selectedLang == l.id}
                            title={l.name} key={l.id} toggleSwitch={() => setSelectedLang(l.id)} />
                    )
                })}

                <Text style={{ ...styles.header, marginTop: 40 }}>Notifications</Text>
                <SwitchButton isEnabled={enableNotification}
                    title={"Notifications"} toggleSwitch={() => setEnableNotification(p => !p)} />
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