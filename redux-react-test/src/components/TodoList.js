import Todo from './Todo'
import React from 'react'

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={ () => onTodoClick(index)} />
        ))}
    </ul>
)

export default TodoList;