import PropTypes from 'prop-types'
import React from 'react'

function Todo (props){
    return (
        <li onClick={props.onClick} style={{textDecoration: props.completed ? 'line-through': 'none'}}>
            {props.text}
        </li>
    )
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }

export default Todo;