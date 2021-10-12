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
    userContainer: {
        flexDirection: 'row',//takes the whole screen
        justifyContent: "space-between",
        alignItems: 'center',
        height: 50,
        marginVertical: 10,
        width: '100%'
    },
    userImage:{
        height: 100,
        width: 100,
        marginRight: 10,
        borderRadius: 50
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    value: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    email: {
        
    }
});

export default styles;