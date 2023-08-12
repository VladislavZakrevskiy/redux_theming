import { createEntityAdapter, createSlice, nanoid } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'
import { ITodo } from './ITodo'

const todoAdapter = createEntityAdapter<ITodo>({
	selectId: (todo) => todo.id,
	// sortComparer: (todo1, todo2) => todo1.title.localeCompare(todo2.title),
})

const TodoSlice = createSlice({
	name: 'todos',
	initialState: todoAdapter.getInitialState(),
	reducers: {
		oneTodoAdded: {
			reducer: todoAdapter.addOne,
			prepare: (payload: Omit<ITodo, 'id'>) => {
				const id = nanoid()
				return {payload: {id, ...payload}}
			},
		},
		manyTodosAdded: todoAdapter.addMany,
		oneTodoRemoved: todoAdapter.removeOne,
		manyTodosRemoved: todoAdapter.removeMany,
		oneTodoUpdated: todoAdapter.updateOne,
	},
})

export const { manyTodosAdded, manyTodosRemoved, oneTodoAdded, oneTodoRemoved, oneTodoUpdated } =
	TodoSlice.actions

export const todoSelector = todoAdapter.getSelectors<RootState>((state) => state.todos)

export default TodoSlice
