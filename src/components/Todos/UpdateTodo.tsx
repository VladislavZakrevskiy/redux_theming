import {
	Box,
	Typography,
	TextField,
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { oneTodoUpdated, todoSelector } from './TodoSlice'
import { Dispatch, SetStateAction, useId, useState } from 'react'
import { ITodo, TodoStatus } from './ITodo'
import { useNavigate } from 'react-router-dom';

type UpdateTodoProps = { id: string; setTodo: Dispatch<SetStateAction<ITodo>> }

const UpdateTodo = ({ id, setTodo }: UpdateTodoProps) => {
    const nav = useNavigate()
	const selectId = useId()
	const todo = useAppSelector((state) => todoSelector.selectById(state, id))
	const [title, setTitle] = useState<string>(todo!.title)
	const [status, setStatus] = useState<TodoStatus>(todo!.status)
	const dispatch = useAppDispatch()

	const updateTodo = () => {
		dispatch(oneTodoUpdated({ id: id!, changes: { title, status, updatedAt: new Date() } }))
        nav('/')
	}

	const handleChange = (event: SelectChangeEvent) => {
		setStatus(event.target.value as TodoStatus)
		setTodo((todo) => ({ ...todo, status: event.target.value as TodoStatus }))
	}

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '60vw', mt: 10 }}>
			<Typography fontSize={48}>Update ToDo</Typography>
			<TextField
				multiline
				value={title}
				onChange={(e) => {
					setTitle(e.target.value)
					setTodo((todo) => ({ ...todo, title: e.target.value }))
				}}
				placeholder="Title"
			/>
			<FormControl fullWidth>
				<InputLabel id={selectId}>Status</InputLabel>
				<Select labelId={selectId} value={status} label="Status" onChange={handleChange}>
					<MenuItem value={'In the plans'}>In the plans</MenuItem>
					<MenuItem value={'In process'}>In process</MenuItem>
					<MenuItem value={'Fail'}>Fail</MenuItem>
					<MenuItem value={'Success'}>Success</MenuItem>
				</Select>
			</FormControl>
			<Button variant="contained" onClick={updateTodo}>
				Update
			</Button>
		</Box>
	)
}

export default UpdateTodo
