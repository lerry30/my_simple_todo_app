import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAllKeys = async (setKeys) => {
    try {
        setKeys(await AsyncStorage.getAllKeys());
    } catch(e) {}
}

export const getTodos = async (key, setList) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        const data = jsonValue != null ? JSON.parse(jsonValue) : null;
        setList(todos => [data, ...todos.filter(todo => todo.id !== data.id)]);
    } catch(e) {}
}

export const removeValue = async(id) => {
    try {
      await AsyncStorage.removeItem(id)
    } catch(e) {}
  }
