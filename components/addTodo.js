import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from '../styles/addtodo-style';

export default function AddTodo({ add }) {
    const [textInput, setTextInput] = useState('');
    const [msg, setMsg] = useState('');
    const [addedMsg, setAddedMsg] = useState(false);
    const [list, setList] = add;
    let textInputComp = '';

    const generateId = () => {
        const time = Date.now();
        const randNum = Math.ceil(Math.random() * 1000);
        const id = time * randNum;

        return id;
    }

    const getDateNTime = () => {
        const currentdate = new Date(); 
        const datetime = currentdate.getDate() + '-'
            + (currentdate.getMonth() + 1)  + '-'
            + currentdate.getFullYear() + ' '  
            + currentdate.getHours() + ':' 
            + currentdate.getMinutes() + ':' 
            + currentdate.getSeconds();

        return datetime;
    }

    const changeText = (text) => {
        setTextInput(text);
    }

    setObjectValue = async (value) => {
        try {
            const key = value.id.toString();
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch(e) {}
    }

    const addNewTodo = () => {
        if(textInput.length > 2) {
            const data = {
                id: generateId(),
                todo: textInput,
                date: getDateNTime()
            };

            // Save to Local Storage
            setObjectValue(data);

            setList([
                data,
                ...list
            ]);

            textInputComp.clear();
            setTextInput('');
            setMsg('Item Successfully Added.');
            setAddedMsg(true);
        } else {
            setMsg('Todo must be 2 characters long.');
            setAddedMsg(false);
        }
    }

    return (
        <View style={styles.addTodoCont}>
            <TextInput 
                multiline
                style={styles.input} 
                placeholder='Add todo here...' 
                onChangeText={changeText}
                ref={input => textInputComp = input}
            />

            <Text style={(addedMsg) ? styles.green : styles.red}>{ msg }</Text>

            <TouchableOpacity style={styles.btn} onPress={addNewTodo}>
                <Text style={styles.title}>Add Todo</Text>
            </TouchableOpacity>
        </View>
    );
}