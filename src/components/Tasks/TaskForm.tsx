import { useContextForm } from '../../context/Tasks/ContextTaskForm'

export const TaskForm = () => {

    const { task, handleOnChange, handleSubmit, cancelEdit } = useContextForm()
    return (
        <>
            <h1 className="has-text-centered is-size-4">{task.id === null ? "Add Task" : "Edit Task"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="name" className="label">Task Name</label>
                    <div className="control">
                        <input className="input" type="text" name="name" id="name" placeholder="My task name" value={task.name} onChange={handleOnChange} />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="description" className="label">Task Description</label>
                    <div className="control">
                        <input className="input" type="text" name="description" id="description" placeholder="My task description" value={task.description} onChange={handleOnChange} />
                    </div>
                </div>
                <div className="is-flex">
                    <button className="button is-primary is-light is-fullwidth" type="submit" >Submit</button>
                    {typeof task.id == 'number' ? <button className='button is-danger is-light is-fullwidth' onClick={cancelEdit}>Cancel</button> : null}
                </div>
            </form>
        </>

    )
}