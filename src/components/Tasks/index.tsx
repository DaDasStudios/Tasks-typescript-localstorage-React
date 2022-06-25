import { TaskForm } from './TaskForm'
import { TasksTable } from './TasksTable'
import { TasksProvider } from '../../context/Tasks/ContextTasks'
import { Notifications } from '../Notifications'
import { NotificationsProvider } from '../../context/Notifications/ContextNotifications'
import { ContextTasksFormProvider } from '../../context/Tasks/ContextTaskForm'
import { useEffect } from 'react'
import { Task } from '../../utilities/types/Task'

export const Tasks = () => {
  // useEffect(() => {
  //   const storedItem = localStorage.getItem("tasks") as string
  //   const json_tasks = JSON.parse(storedItem) as Array<Task>
  //   console.log(json_tasks)
  // })

  return (
    <NotificationsProvider>
      <TasksProvider>
        <ContextTasksFormProvider>
          <div className="container my-6">
            <Notifications></Notifications>
            <div className="columns is-justify-content-center">
              <div className="column mx-3">
                <TaskForm></TaskForm>
              </div>
              <div className="column mx-3">
                <TasksTable></TasksTable>
              </div>
            </div>
          </div>
        </ContextTasksFormProvider>
      </TasksProvider>
    </NotificationsProvider>
  )
}
