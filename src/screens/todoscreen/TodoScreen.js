import React from 'react';
import { View } from 'react-native';
import styles from './TodoScreen.style.js';
import TodoItems from '../../components/todoItems/TodoItems';
import AddTodo from '../../components/addTodo/AddTodo';


export default function TodoScreen() {

    return (
        <View style={styles.wrapper}>

            {/* Listing Todos with Control
                - Edit
                - Delete
                - Toggle Importance
                - Toggle Complete
              */}
            <TodoItems />

            
            {/* Add Todo button and logic */}
            <AddTodo />

        </View>
    )
}


