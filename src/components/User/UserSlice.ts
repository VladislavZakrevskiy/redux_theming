import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface State {
	id: string
	username: string
	isAuth: boolean
}

const initialState: State = {
	id: '',
	isAuth: false,
	username: '',
}

const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setId: (state, action: PayloadAction<string>) => {
			state.id = action.payload
		},
		setIsAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload
		},
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload
		},
	},
})

export const { setId, setIsAuth, setUsername } = UserSlice.actions

export default UserSlice
