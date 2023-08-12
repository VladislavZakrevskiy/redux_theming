import { Box, TextField, Typography, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { oneTodoAdded } from './TodoSlice'

const AddTodo = () => {
	const [title, setTitle] = useState<string>('')
	const dispatch = useAppDispatch()
	const userId = useAppSelector((state) => state.user.id)

	const addTodo = () => {
		dispatch(
			oneTodoAdded({
				updatedAt: null,
				createdAt: new Date(),
				status: 'In the plans',
				title,
				userId,
			})
		)
		setTitle('')
	}

	useEffect(() => {
		const enterHandler = (e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				addTodo()
			}
		}

		document.addEventListener('keypress', enterHandler)

		return () => document.removeEventListener('keypress', enterHandler)
	}, [])

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 10, height: 60 }}>
			<Typography fontSize={48}>Add new ToDo</Typography>
			<TextField value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" autoFocus/>
			<Button variant="contained" onClick={addTodo}>
				Add
			</Button>
		</Box>
	)
}

export default AddTodo
