import React from 'react'
import crossIcon from '../images/icon-cross.svg'
import checkIcon from '../images/icon-check.svg'
import { useSelector } from 'react-redux'
import { selectDarkMode } from '../features/Slices/themeSlice'
import { completedTodo } from '../features/Slices/todosSlice'
import { removeTodo } from '../features/Slices/todosSlice'
import { useDispatch } from 'react-redux'


const Todo = ({content, completed, id}) => {

    const darkMode = useSelector(selectDarkMode)
    const dispatch = useDispatch()
    
    const completeTodoHandler = () => {
        dispatch(completedTodo(id))
    }

    const removeTodoHandler = () => {
        dispatch(removeTodo(id))
    }
    
    return (
        <div className="todoContainer" onClick={completeTodoHandler}>
            <div className={`circle ${completed ? 'active' : ''}`} >
                <img src={checkIcon} alt="" />
            </div>
                <li className={`todo ${!darkMode ? 'whiteBg' : ''} ${ completed ? 'active' : ''}`}>
                {content}
                </li>
            <img src={crossIcon} className='deleteIcon' alt="" onClick={removeTodoHandler}/>
        </div>
    )
}

export default Todo