import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './ListTodos.styles';
import { textColor } from '../../globals/globalStyles';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { FontAwesome } from '@expo/vector-icons';

import { selectedListAtom, todosAtom } from '../../globals/globalState';
import { useRecoilValue } from 'recoil';


export default function ListTodos({ editTodo, deleteTodo, toggle}) {

    const todos = useRecoilValue( todosAtom );
    const selectedList = useRecoilValue( selectedListAtom );
    const selectedListTodos = todos.filter( todo => todo.list === selectedList );

    function renderTodo({ item }) {
        return (
            <View style={styles.todoItem}>
                <BouncyCheckbox
                    innerIconStyle={{borderColor: 'white'}}
                    fillColor={textColor}
                    text={item.task}
                    textStyle={{color: 'white', fontSize: 22}}
                    style={styles.checkboxButton}
                    onPress={() => toggle(item, 'completed')}
                />

                <View style={styles.controls}>
                    <FontAwesome name="edit" color="white" size={24} style={styles.icon} onPress={() => editTodo(item)} />
                    <FontAwesome name="trash-o" color="white" size={24} style={styles.icon} onPress={() => deleteTodo(item.id)} />
                    <FontAwesome name={item.important ? "star" : "star-o"}
                        color="white" size={24} style={styles.icon}
                        onPress={() => toggle(item, 'important')} />
                </View>
            </View>
            );
        }

    return (
            <FlatList
                data={selectedListTodos}
                renderItem={renderTodo}
                />
    );
}
