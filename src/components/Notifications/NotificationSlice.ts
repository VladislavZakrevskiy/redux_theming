import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'
import { INotification } from './INotification'



const NotificationAdapter = createEntityAdapter<INotification>({
	selectId: (notification) => notification.id,
	sortComparer: (notification1, notification2) =>
		notification1.title.localeCompare(notification2.title),
})

const NotificationSlice = createSlice({
	name: 'notifications',
	initialState: NotificationAdapter.getInitialState(),
	reducers: {
		oneNotificationAdded: NotificationAdapter.addOne,
		manyNotificationsAdded: NotificationAdapter.addMany,
		oneNotificationRemoved: NotificationAdapter.removeOne,
		manyNotificationsRemoved: NotificationAdapter.removeMany,
		oneNotificationUpdated: NotificationAdapter.updateOne,
	},
})

export const {
	manyNotificationsAdded,
	manyNotificationsRemoved,
	oneNotificationAdded,
	oneNotificationRemoved,
	oneNotificationUpdated,
} = NotificationSlice.actions

export const todoSelector = NotificationAdapter.getSelectors<RootState>((state) => state.notifications)

export default NotificationSlice
