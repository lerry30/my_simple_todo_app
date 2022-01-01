import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    tab: {
        padding: 10,
        borderRadius: 4,
        borderColor: '#aaa',
        borderWidth: 1,
        marginBottom: 10,
    },

    removeCont: {
        flex: 1,
        alignItems: 'flex-end',
    },

    todoCont: {
        paddingBottom: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },

    todo: {
        flex: 1,
        color: '#333'
    },

    dateCont: {
        paddingTop: 10
    },

    date: {
        color: '#999',
        fontSize: 10
    }
});