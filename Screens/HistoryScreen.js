import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
    Alert,
    FlatList,
} from 'react-native';
import TextBox from '../Components/TextBox';
import Header from '../Components/Header';

const HistoryScreen = (props) => {
    const [history, setHistory] = React.useState([
        {
            id: 1,
            creditDate: "02.03.2021",
            loanDuration: 10,
            creditAmount: 10,
            serviceFee: 2,
            penaltyApplied: 0,
            totalPayable: 12,
            amountPaid: 12,
            outstandingAmount: 0,
            status: "Closed (28.03.2021)"
        },
        {
            id: 2,
            creditDate: "09.04.2021",
            loanDuration: 10,
            creditAmount: 20,
            serviceFee: 2,
            penaltyApplied: 0,
            totalPayable: 22,
            amountPaid: 22,
            outstandingAmount: 0,
            status: "Closed (23.05.2021)"
        },
        {
            id: 3,
            creditDate: "10.05.2021",
            loanDuration: 10,
            creditAmount: 30,
            serviceFee: 5,
            penaltyApplied: 0,
            totalPayable: 35,
            amountPaid: 35,
            outstandingAmount: 0,
            status: "Closed (20.05.2021)"
        },
        {
            id: 4,
            creditDate: "17.05.2021",
            loanDuration: 10,
            creditAmount: 10,
            serviceFee: 2,
            penaltyApplied: 3,
            totalPayable: 15,
            amountPaid: 10,
            outstandingAmount: 5,
            status: "Outstanding"
        }
    ]);

    const genShortDesc = (historyItem) => {
        return `Credit date: ${historyItem.creditDate}\nCredit amount: ${historyItem.creditAmount} USD\nStatus: ${historyItem.status}`;
    }

    const genLongDesc = historyItem => {
        return `Credit date: ${historyItem.creditDate}\nLoan duration: ${historyItem.loanDuration} days\nCredit amount: ${historyItem.creditAmount} USD\nService fee: ${historyItem.serviceFee} USD\nPenalty applied: ${historyItem.penaltyApplied} USD\nTotal payable: ${historyItem.totalPayable} USD\nAmount paid: ${historyItem.amountPaid} USD\nOutstanding amount: ${historyItem.outstandingAmount} USD\nStatus: ${historyItem.status}`;
    }

    return (
        <View style={styles.container}>
            <Header navigation={props.navigation} />
            <FlatList data={history} renderItem={({ item }) => {
                const shortDesc = genShortDesc(item);
                const longDesc = genLongDesc(item);

                return (
                    <Pressable key={item.id} onPress={() => Alert.alert("Details", longDesc)}>
                        <TextBox containerStyle={styles.textBox}>
                            <Text style={styles.text}>{shortDesc}</Text>
                        </TextBox>
                    </Pressable>
                )
            }}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default HistoryScreen;