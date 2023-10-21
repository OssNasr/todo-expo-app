import { atom } from 'recoil';




const todoListsAtom = atom({
    key: 'todoListsAtom',
    default: ['Today']
});

const selectedListAtom = atom({
    key: 'selectedTodoList',
    default: 'Today'
});

const todosAtom = atom({
    key: 'todoItemsAtom',
    default: []
});




export { todoListsAtom, selectedListAtom, todosAtom };
