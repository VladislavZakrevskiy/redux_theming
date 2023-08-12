import { FC } from 'react'
import { ITodo } from '../ITodo'
import { CardActions, Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { oneTodoRemoved } from '../TodoSlice'
import { useNavigate } from 'react-router-dom'

type TodoActionsProps = { todo: ITodo }

const TodoActions: FC<TodoActionsProps> = ({ todo }) => {
	const userId = useAppSelector((state) => state.user.id)
	const dispatch = useAppDispatch()
	const nav = useNavigate()

	if (userId !== todo.userId) {
		return (
			<CardActions sx={{mb: 0}}>
				<Button variant="contained" onClick={() => nav('/more/' + todo.id)}>
					More info...
				</Button>
			</CardActions>
		)
	}

	return (
		<CardActions sx={{mb: 0}}>
			<Button color="error" onClick={() => dispatch(oneTodoRemoved(todo.id))}>
				Delete
			</Button>
			<Button color="warning" onClick={() => nav('/update/' + todo.id)}>
				Update
			</Button>
			<Button variant="contained" onClick={() => nav('/more/' + todo.id)}>
				More info...
			</Button>
		</CardActions>
	)
}

export default TodoActions
