import { ITodo } from './ITodo'
import Todo from './Todo'
import { FC } from 'react'
import { Paper } from '@mui/material'

interface ITodoListProps {
	todos: ITodo[]
}

const TodoList: FC<ITodoListProps> = ({ todos }) => {
	return (
		<Paper sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', p: 3, gap: 3 }}>
			{todos.map((todo) => (
				<Todo todo={todo} />
			))}
		</Paper>
	)
}

export default TodoList
