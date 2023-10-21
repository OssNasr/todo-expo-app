import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

import { selectedListAtom, todosAtom } from '../../globals/globalState';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { updateTodosDatabase } from '../../api/database';

import ModalForm from '../modalForm/ModalForm';
import { textColor } from '../../globals/globalStyles';
import styles from './AddTodo.styles';

export default function AddTodo() {

    const [modalVisibility, setModalVisibility] = React.useState(false);

    const [todoInput, setTodoInput] = React.useState('');

    const selectedList = useRecoilValue( selectedListAtom );
    const setTodos = useSetRecoilState( todosAtom );

    function addTodoItem() {
        setTodos( oldTodos => {
            let newTodos = [...oldTodos, {
                    task: todoInput,
                    list: selectedList,
                    important: false,
                    completed: false,
                    id: uuid()
                }]
            updateTodosDatabase( newTodos );
            return newTodos;
        });
        setModalVisibility(false);
        setTodoInput('');
    }

    return (
        <View>

            <TouchableOpacity
                style={styles.addTodoButton}
                onPress={() => setModalVisibility(true)}>

                <Feather name="plus" color={textColor} size={24} />
                <Text style={styles.addTodoText}>
                    Add a Todo
                </Text>
            </TouchableOpacity>


            <ModalForm
                title="Add New Todo"
                visible={modalVisibility}
                inputValue={todoInput}
                handleChange={setTodoInput}
                cancleForm={() => setModalVisibility(false)}
                submitForm={addTodoItem}
                />

        </View>
    );
}

