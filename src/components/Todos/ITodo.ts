export type TodoStatus =  "In the plans" | 'In process' | `Fail` | 'Success'

export interface ITodo {
	id: string
	title: string
	status: TodoStatus
	userId: string
	createdAt: Date
	updatedAt: Date | null
}