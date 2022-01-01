import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    top: {
        paddingTop: 30,
        backgroundColor: '#005353',
    },

    headerContainer: {
        padding: 20,
        backgroundColor: 'teal',
        alignItems: 'center',
    },

    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 10
    }
});