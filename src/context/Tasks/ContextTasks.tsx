import { createContext, useContext, useState, useEffect } from 'react'
import fetchtasks from '../../data/tasks.json'
import { Children } from '../../utilities/types/Children'
import { Task } from '../../utilities/types/Task'

// ? Types

type TasksContextValues = {
    tasks: Array<Task>
    addTask: (name: string, description: string) => void
    deleteTask: (id: number) => void
    editTask: (id: number, newName: string, newDescription: string) => void
}


// ? Data
const storedItem = localStorage.getItem("tasks") as string
let json_tasks: Array<Task> | null
json_tasks = JSON.parse(storedItem)
json_tasks === null ? json_tasks = fetchtasks : null

const initialTasks = json_tasks

// ? Context
const TasksContext = createContext({} as TasksContextValues)

export const useTasksContext = () => useContext(TasksContext)

export const TasksProvider = ({ children }: Children) => {
    const [tasks, setTasks] = useState(initialTasks as Array<Task>)

    // ? Methods
    function addTask(name: string, description: string) {
        setTasks([...tasks, { id: tasks.length, name, description }])
    }

    function deleteTask(id: number) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    function editTask(id: number, newName: string, newDescription: string) {
        setTasks(tasks.map(task => task.id === id ? { id, name: newName, description: newDescription } : task
        ))
    }

    useEffect(() => {
        console.log("changed")
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    return (
        <TasksContext.Provider value={{
            tasks, addTask, deleteTask, editTask
        }}>
            {children}
        </TasksContext.Provider>
    )
}