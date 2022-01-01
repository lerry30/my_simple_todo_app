import React from 'react';
import { Text, View } from 'react-native';

// style
import { styles } from '../styles/header-style';

export default function Header() {
    return (
        <View style={styles.top}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>My Todos</Text>
            </View>
        </View>
    );
}