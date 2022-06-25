import { useTasksContext } from '../../context/Tasks/ContextTasks'
import { useContextForm } from '../../context/Tasks/ContextTaskForm'

export const TasksTable = () => {
    const { tasks, editTask, deleteTask } = useTasksContext()
    const { setToEdit } = useContextForm()

    return (
        <div className="container">
            <div className="card-group">
                {
                    tasks.map(task => (
                        <div className="card" key={task.id}>
                            <header className="card-header">
                                <p className="card-header-title">
                                    {task.name}
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    {task.description}
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a className="card-footer-item button is-success is-light" onClick={() => {
                                    setToEdit(task.id, task.name, task.description)
                                    editTask(task.id, task.name, task.description)
                                }}>Edit</a>
                                <a className="card-footer-item button is-warning is-light" onClick={() => deleteTask(task.id)}>Delete</a>
                            </footer>
                        </div>
                    ))
                }
            </div>
        </div>


    )
}

