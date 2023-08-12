import AddTodo from '../components/Todos/AddTodo'
import {  Paper } from '@mui/material';
import TodoList from '../components/Todos/TodoList';
import { useAppSelector } from '../store/hooks';
import { todoSelector } from '../components/Todos/TodoSlice';

const Main = () => {
	const todos = useAppSelector(todoSelector.selectAll)

	return (
		<Paper sx={{display: 'grid', gridTemplate: `50vh 1fr /1fr`, minHeight: '100vh', pt: 10}}>
			<AddTodo />
			<TodoList todos={todos}/>
		</Paper>
	)
}

export default Main
