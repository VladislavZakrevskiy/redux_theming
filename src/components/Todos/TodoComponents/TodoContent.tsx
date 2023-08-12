import { CardContent, Typography } from '@mui/material'
import { FC } from 'react'
import { ITodo } from '../ITodo'

type TodoContentProps = { todo: ITodo }

const TodoContent: FC<TodoContentProps> = ({ todo }) => {
	return (
		<CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
			<Typography>{todo.status}</Typography>
			<Typography fontWeight={700} fontSize={24} sx={{ overflowWrap: 'break-word' }}>
				{todo.title}
			</Typography>
		</CardContent>
	)
}

export default TodoContent
