import { useEffect } from 'react';
import axios from 'axios';



function fetchTodos(setTodos, setTodoLists) {

    useEffect(function(){
        axios.get('https://api.restful-api.dev/objects/ff8081818b1b4123018b2b25fcf61707',)
            .then( res => {
                let todos = res.data.data;
                setTodos(todos) 

                let todoLists = [];
                for ( todo of todos )
                    if ( todoLists.indexOf(todo.list) === -1 )
                        todoLists.push( todo.list )
                setTodoLists( todoLists );

            });
    }, []);
}

function updateTodosDatabase(todos) {
    axios.patch('https://api.restful-api.dev/objects/ff8081818b1b4123018b2b25fcf61707', {
        data: todos
        })
        .then( res => console.log(res.status) )
}



export { fetchTodos, updateTodosDatabase };
