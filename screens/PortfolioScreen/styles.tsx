import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,//takes the whole screen
        alignItems: "center",
        padding: 20,
        backgroundColor: 'white',
    },
    image:{
        height: 175,
        resizeMode: 'contain',
    },
    balanceContainer: {
        marginVertical: 20,
        width: '100%',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#777777'
    },
    balance: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black'
    }
});

export default styles;