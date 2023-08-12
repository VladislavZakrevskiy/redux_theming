import { FC } from 'react'
import { Card } from '@mui/material'
import { ITodo } from './ITodo'
import TodoHeader from './TodoComponents/TodoHeader'
import TodoContent from './TodoComponents/TodoContent'
import TodoActions from './TodoComponents/TodoActions'

type TodoProps = { todo: ITodo; isActions?: boolean }

const Todo: FC<TodoProps> = ({ todo, isActions = true }) => {
	return (
		<Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
			<TodoHeader todo={todo} />
			<TodoContent todo={todo} />
			{isActions ? <TodoActions todo={todo} /> : null}
		</Card>
	)
}

export default Todo
