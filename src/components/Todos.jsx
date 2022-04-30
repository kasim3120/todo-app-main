import React,{useRef} from 'react'
import moonIcon from '../images/icon-moon.svg'
import sunIcon from '../images/icon-sun.svg'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { selectDarkMode, toggleTheme } from '../features/counter/themeSlice'
import { useDispatch } from 'react-redux'


const Todos = () => {

	const inputRef=useRef()

	const darkMode = useSelector(selectDarkMode)
	const dispatch = useDispatch()

	
	return (
		<div className='todos'>
			<div className="todosHeader">
				<h1>TODOS</h1>
				{darkMode ? 
				(<img src={sunIcon} alt='' onClick={() => dispatch(toggleTheme)} />)
				:
				(<img src={moonIcon} alt='' onClick={() => dispatch(toggleTheme)} />)
				}
			</div>
			<div className="inputContainer">
				<div className="circle">
					<form action="">
						<input type="text" ref={inputRef} placeholder='create a new todo...'/>
						<button type='submit'></button>
					</form>
				</div>
			</div>
			<div className="todosContainer">
				<Todo />
				<div className="todosFooter">
					<p>0 items left</p>
					<div className="types">
					<div className="types">
						<p className='clear'>All</p>
						<p className="clear">Active</p>
						<p className="clear">Completed</p>
					</div>
					</div>
					<p className="clear">Clear completed</p>
				</div>
			</div>
		</div>
	)
}

export default Todos