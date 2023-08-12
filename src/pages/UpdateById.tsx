import { Box, Paper } from '@mui/material'
import UpdateTodo from '../components/Todos/UpdateTodo'
import Todo from '../components/Todos/Todo'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { ITodo } from '../components/Todos/ITodo'
import { useAppSelector } from '../store/hooks'
import { todoSelector } from '../components/Todos/TodoSlice'

const UpdateById = () => {
	const id = useParams().id
	const stateTodo = useAppSelector((state) => todoSelector.selectById(state, id!))
	const [todo, setTodo] = useState<ITodo>({ ...stateTodo!, updatedAt: new Date() })

	return (
		<Paper sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',  p: 10 }}>
			<Box sx={{  width: '60vw' }}>
				<Todo todo={todo} isActions={false} />
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
				<UpdateTodo id={id!} setTodo={setTodo} />
			</Box>
		</Paper>
	)
}

export default UpdateById
