import React from 'react';
import { FlatList, Keyboard, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import styles from './DrawerUserList.styles';
import ModalForm from '../modalForm/ModalForm';
import { todoListsAtom, selectedListAtom, todosAtom } from '../../globals/globalState';
import { useRecoilState } from 'recoil';
import { fetchTodos } from '../../api/database';

export default function DrawerUserList({ navigation }) {

    const [modalVisibility, setModalVisibility] = React.useState(false);
    const [todoListInput, setTodoListInput] = React.useState('');

    // All todo lists
    const [todoLists, setTodoLists] = useRecoilState( todoListsAtom );
    // current selected list
    const [selectedList, setSelectedList] = useRecoilState( selectedListAtom );
    // all todos
    const [todos, setTodos] = useRecoilState( todosAtom );
    // fetching todos database and set todos and lists globally
    fetchTodos(setTodos, setTodoLists);

    function addTodoList() {
        setTodoLists( oldTodoLists => {
            let newTodoLists;
            if ( oldTodoLists.indexOf( todoListInput ) === -1 )
                return [ ...oldTodoLists, todoListInput ]
            return oldTodoLists;
        });
        setTodoListInput('');
        setModalVisibility(false);
    }

    function showTodoList(list) {
        setSelectedList(list);
        navigation.closeDrawer();
    }

    return (
        <View style={styles.userListContainer}>

            <FlatList
                data={todoLists}
                renderItem={({ item: list }) => (
                    <ScrollView>
                        <TouchableOpacity
                            style={[styles.listItem, {backgroundColor: list == selectedList ? '#6666' : 'transparent' }]}
                            onPress={() => showTodoList(list)}>

                            <Feather name="list" color="#6A76B2" size={28} />
                            <Text style={styles.listItemText}>{ list }</Text>
                            <Text style={styles.todosCount}>{ todos.filter( todo => todo.list == list ).length }</Text>
                        </TouchableOpacity>
                    </ScrollView>
                )}
                />


            {/* Add New List button */}
            <TouchableOpacity
                style={styles.addListButton}
                onPress={() => setModalVisibility(true)}>

                <MaterialIcons name="add" color="white" size={26} />
                <Text style={styles.addListButtonText}>
                    New List
                </Text>
                <MaterialIcons name="post-add" color="white" size={26} />
            </TouchableOpacity>

            <ModalForm
                title="Add New List"
                visible={modalVisibility}
                inputValue={todoListInput}
                handleChange={setTodoListInput}
                cancleForm={() => setModalVisibility(false)}
                submitForm={addTodoList}
                />

        </View>
    );
}


