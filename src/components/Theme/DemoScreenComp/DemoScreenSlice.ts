import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type PathType = 'Blog' | 'Components' | 'Text'

interface State {
    path: PathType
}

const initialState: State = {
    path: 'Blog'
}

const DemoScreenSlice = createSlice({
	name: 'demoScreen',
	initialState,
	reducers: {
		navigatedToPage: (state, action: PayloadAction<PathType>) => {
			state.path = action.payload
		}
	},
})

export const {navigatedToPage} = DemoScreenSlice.actions

export default DemoScreenSlice
