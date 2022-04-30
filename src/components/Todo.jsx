import React from 'react'
import crossIcon from '../images/icon-cross.svg'
import checkIcon from '../images/icon-check.svg'

const Todo = () => {
    return (
        <div className="todoContainer">
            <div className="circle">
                <img src={checkIcon} alt="" />
            </div>
            <li className="todo">Example</li>
            <img src={crossIcon} className='deleteIcon' alt="" />
        </div>
    )
}

export default Todo