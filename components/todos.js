import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { removeValue } from '../async_storage/storage';

// style
import { styles } from '../styles/todos-style';

export default function Todos({ item, data }) {
    const [list, setList] = data;

    const removeTodo = (id) => {
        setList(todo => todo.filter(item => item.id !== id));
        removeValue(id.toString());
    }

    const removeTodoAlert = (id) => {
        Alert.alert(
            "Are you sure?",
            "Do you really want to delete these records? This process cannot be undone.",
            [
              { text: 'Cancel', onPress: () => {} },
              { text: 'Delete', onPress: () => removeTodo(id) }
            ]
        );

        // setList(todo => todo.filter(item => item.id !== id));
    }

    return (
        <View style={styles.tab}>
             <TouchableOpacity onPress={() => removeTodoAlert(item.id)} style={styles.removeCont}>
                <FontAwesome name="remove" size={18} color='#f33' />
            </TouchableOpacity>

            <View style={styles.todoCont}>
                <Text style={styles.todo}>{ item.todo }</Text>
            </View>

            <View style={styles.dateCont}>
                <Text style={styles.date}>{ item.date }</Text>
            </View>
        </View>
    );
}