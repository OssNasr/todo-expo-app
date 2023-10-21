import React from 'react';
import { View } from 'react-native';
import ModalForm from '../modalForm/ModalForm';
import styles from './TodoItems.styles';

import { todosAtom } from '../../globals/globalState';
import { useRecoilState } from 'recoil';
import { updateTodosDatabase } from '../../api/database';

import ListTodos from '../listTodos/ListTodos';


export default function TodoItems() {

    const [todos, setTodos] = useRecoilState( todosAtom );

    const [modalVisibility, setModalVisibility] = React.useState(false);
    const [todoInput, setTodoInput] = React.useState('');

    function updateTodos(newTodos) {
        setTodos( newTodos ); // global state
        updateTodosDatabase( newTodos ); // server
    }

    const [itemToEdit, setItemToEdit] = React.useState({});

    function showEditModal(item) {
        setModalVisibility(true);
        setTodoInput( item.task );
        setItemToEdit( item );
    }

    function editTodo() {
        let newTodos = todos.filter( todo => todo.id != itemToEdit.id );
        let newTodoItem = { ...itemToEdit, task: todoInput };
        newTodos = [...newTodos, newTodoItem];
        setModalVisibility(false);
        updateTodos( newTodos );
    }

    function deleteTodo(deletedTodoId) {
        let newTodos = todos.filter( todo => todo.id != deletedTodoId )
        updateTodos( newTodos );
    }

    function toggleTodoProp(targetTodo, prop) {
        let newTodos = todos.filter( todo => todo.id !== targetTodo.id );
        let toggledTodo = {...targetTodo };
        toggledTodo[prop] = !targetTodo[prop];

         newTodos = [...newTodos, toggledTodo];
         updateTodos(newTodos);
    }


    return (
        <View style={styles.todosContainer}>

            {/* Read (view), Delete, Toggle Todos */}

            <ListTodos
                editTodo={showEditModal}
                deleteTodo={deleteTodo}
                toggle={toggleTodoProp}
                />


            {/* Update */}
            {/* Edit todo, showing form in a modal, and save edits */}

            <ModalForm
                title="Edit Todo"
                visible={modalVisibility}
                inputValue={todoInput}
                handleChange={setTodoInput}
                cancleForm={() => setModalVisibility(false)}
                submitForm={editTodo}
                />


        </View>
    );
}

