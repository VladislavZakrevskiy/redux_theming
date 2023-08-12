import { useParams } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { todoSelector } from '../components/Todos/TodoSlice';
import Todo from '../components/Todos/Todo';
import { Paper } from '@mui/material';

const TodoById = () => {
	const id = useParams().id!
	const todo = useAppSelector(state => todoSelector.selectById(state, id))

	
	return <Paper sx={{p: 10, minHeight: '100vh'}}>
		<Todo todo={todo} isActions={false}/>

		Later history
	</Paper>
}

export default TodoById
