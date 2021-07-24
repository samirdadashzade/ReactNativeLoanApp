import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Pressable,
    FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import TextBox from '../Components/TextBox';

import { w, h } from '../Utils/Dimensions';
import { logo } from '../Utils/Logo';

const NotificationScreen = (props) => {
    const [notifications, setNotifications] = React.useState([
        {
            id: 1,
            description: "Your loan balance of 4 USD is overdue. 0.2 USD penalty has been applied. Please repay your loan to avoid further charges."
        },
        {
            id: 2,
            description: "Your loan balance of 4 USD is overdue today. 5% extra charge will be applied tomorrow if you don't repay your loan within today."
        },
        {
            id: 3,
            description: "You have repaid 18 USD of your total loan of 22 USD credited at 09.04.2020 16:29. Your loan balance is 4 USD."
        },
        {
            id: 4,
            description: "Your loan balance has been approved and credited to your account. Your loan of 20 USD is due 23.04.2020. Interest of 2 USD has been applied."
        }
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.parentBox}>
                <Image
                    style={styles.logo}
                    resizeMode="stretch"
                    source={logo} />
                <Feather name="bell" size={23} color="white" />
            </View>
            <FlatList data={notifications} renderItem={n =>
                <Pressable key={n.item.id}>
                    <TextBox containerStyle={styles.textBox}>
                        <Text style={styles.text}>{n.item.description}</Text>
                    </TextBox>
                </Pressable>
            }>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    parentBox: {
        alignSelf: 'flex-end',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 19,
        width: '66%',
        height: 100,
        paddingRight: 10,
    },
    logo: {
        width: w / 3,
        height: h / 3
    },
    container: {
        flex: 1,
        backgroundColor: '#2C378B'
    },
    textBox: {
        marginBottom: 10
    },
    text: {
        color: 'black',
        marginTop: 5,
        fontSize: 19,
    },
});

export default NotificationScreen;