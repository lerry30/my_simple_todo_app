import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    addTodoCont: {
        padding: 30
    },

    input: {
        padding: 5,
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
    },

    red: {
        color: 'red',
        padding: 5,
        fontSize: 10,
        alignSelf: 'center'
    },

    green: {
        color: 'green',
        padding: 5,
        fontSize: 10,
        alignSelf: 'center'
    },

    btn: {
        alignItems: 'center',
        backgroundColor: 'teal',
        borderRadius: 3,
        marginTop: 10,
        padding: 10
    },

    title: {
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 10
    }
});