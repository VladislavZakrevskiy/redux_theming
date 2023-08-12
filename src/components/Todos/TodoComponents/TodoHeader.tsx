import { Typography } from '@mui/material'
import { FC } from 'react'
import { ITodo } from '../ITodo'
import { Box } from '@mui/material'

type TodoHeaderProps = { todo: ITodo }

const TodoHeader: FC<TodoHeaderProps> = ({ todo }) => {

	return (
		<Box sx={{pl: 2, pt: 2}}>
			<Box display='flex' gap ={1}>
				<Typography fontWeight={700}>Created at: </Typography>
				<Typography>{todo.createdAt.toLocaleDateString()}</Typography>
			</Box>
			{todo.updatedAt ? (
				<Box display='flex' gap ={1}>
					<Typography fontWeight={700}>Updated at: </Typography>
					<Typography>{todo.updatedAt.toLocaleDateString()}</Typography>
				</Box>
			) : null}
		</Box>
	)
}

export default TodoHeader
