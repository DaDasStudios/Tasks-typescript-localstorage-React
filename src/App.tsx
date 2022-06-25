import { NavBar } from "./components/NavBar"
import { Route, Routes } from 'react-router-dom'
import { Tasks } from './components/Tasks'
import { TaskForm } from './components/Tasks/TaskForm'
import About from './pages/About'
import Report from './pages/Report'
import Contact from './pages/Contact'
import './main.css'

function App() {

  return (
    <div className="app">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Tasks></Tasks>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/report" element={<Report></Report>}></Route>
        <Route path="/add" element={<TaskForm></TaskForm>}></Route>
      </Routes>
    </div>
  )
}

export default App
