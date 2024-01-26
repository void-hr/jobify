import { Routes, Route  } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import { ToastContainer } from 'react-toastify'
import CreateJob from './pages/CreateJob/CreateJob'

function App() {

  return (
    <>
    
         <ToastContainer />
    <Routes>

      <Route path="/" element={<Homepage />}/ >
      <Route path="/login" element={<LoginPage />}/ >
      <Route path="/register" element={<RegisterPage />}/ >

      <Route path="/create" element={<CreateJob />}/ >
      <Route / >

     
    </Routes>
    </>
  )
}

export default App
