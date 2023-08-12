import { configureStore } from '@reduxjs/toolkit'
import Todoslice from '../components/Todos/TodoSlice'
import NotificationSlice from '../components/Notifications/NotificationSlice'
import UserSlice from '../components/User/UserSlice'
import ThemeSlice from '../components/Theme/ThemeSlice'
import DemoScreenSlice from '../components/Theme/DemoScreenComp/DemoScreenSlice'

export const store = configureStore({
	reducer: {
		todos: Todoslice.reducer,
		notifications: NotificationSlice.reducer,
		user: UserSlice.reducer,
		theme: ThemeSlice.reducer,
		routing: DemoScreenSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
