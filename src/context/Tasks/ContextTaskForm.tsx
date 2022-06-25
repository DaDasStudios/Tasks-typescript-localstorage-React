import React,{ useContext, useState, createContext } from 'react'
import { Children } from '../../utilities/types/Children'
import { useTasksContext } from './ContextTasks'
import { useNotificationsContext } from '../Notifications/ContextNotifications'
import { isStringEmpty } from '../../utilities/isStringEmpty'

// ? Types 

type TaskState = {
    id: number | null,
    name: string,
    description: string
}

type ContextTaskFormType = {
    task: TaskState
    handleSubmit: (e:React.FormEvent<HTMLFormElement>) => void
    handleOnChange: ((e: React.ChangeEvent<HTMLInputElement>) => void)
    setToEdit: (id: number, name: string, description: string) => void
    cancelEdit: () => void
}

const initialTaskState = {
    id: null,
    name: '',
    description: ''
} as TaskState

// ? Context

const ContextTasksForm = createContext({} as ContextTaskFormType)

export const useContextForm = () => useContext(ContextTasksForm)

// ? Provider

export const ContextTasksFormProvider = ({ children }: Children) => {
    const { addTask, editTask } = useTasksContext()
    const { addNofitication } = useNotificationsContext()

    const [task, setTask] = useState(initialTaskState)


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isStringEmpty(task.name) || isStringEmpty(task.description)) {
            addNofitication({ title: "Warning", body: "You cannot add a task without name or description" })
        } else {
            task.id === null ? addTask(task.name, task.description) : editTask( task.id, task.name, task.description)
            setTask(initialTaskState)
        }
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    const setToEdit = (id: number, name: string, description: string) => {
        setTask({ ...task, id, name, description })
    }

    const cancelEdit = () => {
        setTask(initialTaskState)
    }

    return (
        <ContextTasksForm.Provider value={{
            task,
            handleSubmit,
            handleOnChange,
            setToEdit,
            cancelEdit
        }}>
            {children}
        </ContextTasksForm.Provider>
    )
}