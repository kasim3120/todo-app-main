import React,{useRef} from 'react'
import moonIcon from '../images/icon-moon.svg'
import sunIcon from '../images/icon-sun.svg'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { selectDarkMode, toggleTheme } from '../features/Slices/themeSlice'
import { useDispatch } from 'react-redux'

import {
	selectTodos,
	selectCompletedTodos,
	selectActiveTodos,
	selectShowTodos,
	selectShowCompletedTodos,
	selectShowActiveTodos,
	clearCompleted,
	addTodo,
} from '../features/Slices/todosSlice'

import { showAllFunction } from '../features/Slices/todosSlice'
import { showActiveFunction } from '../features/Slices/todosSlice' 
import { showCompletedFunction } from '../features/Slices/todosSlice'



const Todos = () => {

	const inputRef=useRef()

	const darkMode = useSelector(selectDarkMode)
	const dispatch = useDispatch()

	const todos = useSelector(selectTodos)
	const completedTodos = useSelector(selectCompletedTodos)
	const activeTodos = useSelector(selectActiveTodos)

	const showTodos = useSelector(selectShowTodos)
	const showActiveTodos = useSelector(selectShowActiveTodos)
	const showCompletedTodos = useSelector(selectShowCompletedTodos)

	let todosToRender;
	let activeTodosNumber = 0

	const submitTodo = (e) => {
		e.preventDefault()
	
		if(inputRef.current.value.trim()){
			dispatch(addTodo({
				id: Math.random() * 1000,
				content: inputRef.current.value,
				completed:false,
			}))
		}
	inputRef.current.value = ''
	console.log(todosToRender)
}

	const showCompletedHandler = () => {
		dispatch(showCompletedFunction())
	}

	const showAllHandler = () => {
		dispatch(showAllFunction())
	}

	const showActiveHandler = () => {
		dispatch(showActiveFunction())
	}

	const clearCompletedHandler = () => {
		dispatch(clearCompleted())
	}
	
	if(showActiveTodos) {
		todosToRender = activeTodos
	}
	else if(showCompletedTodos``){
		todosToRender = completedTodos
	}
	else{
		todosToRender = todos
	}

	todos?.forEach((todo) => {
		if(!todo.completed){
			activeTodosNumber++
		}
	})

	return (
		<div className='todos'>
			
			<div className="todosHeader">
				<h1>TODOS</h1>
				{darkMode ? 
				(<img src={sunIcon} alt='' onClick={() => dispatch(toggleTheme())} />)
				:
				(<img src={moonIcon} alt='' onClick={() => dispatch(toggleTheme())} />)
				}
			</div>
			
			<div className="inputContainer">
				<div className="circle"></div>
				<form onSubmit={submitTodo}>
					<input 
						className={!darkMode ? 'whiteBg' : ''}
						type="text" 
						ref={inputRef}
						placeholder='create a new todo...'
					/>
					<button 
						type='submit'
						hidden>
					</button>
				</form>
			</div>
			
			<div className={`todosContainer ${!darkMode ? 'whiteBg' : ''}`}>
				{todosToRender.map((todo) =>
					<Todo 
						content = {todo.content}
						key = {todo.id}
						id = {todo.id}
						completed = {todo.completed}
				/>
			)}
				
			<div className={`todosFooter ${!darkMode ? 'whiteBg': ''}`}>
				<p>{activeTodosNumber} items left</p>
					<div className="types">
						<div className="types">
						<p className={`clear ${showTodos ? 'active' : ''}`} onClick={showAllHandler}>All</p>
						<p className={`clear ${showActiveTodos ? 'active' : ''}`} onClick={showActiveHandler}>Active</p>
						<p className={`clear ${showCompletedTodos ? 'active' : ''}`} onClick={showCompletedHandler}>Completed</p>
						</div>
					</div>
					<p className="clear" onClick={clearCompletedHandler}>Clear completed</p>
				</div>
			</div>
		</div>
	)
}

export default Todos