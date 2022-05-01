import React from "react";
import { HashRouter as Router } from 'react-router-dom'

// custom pages
import BasePage from "./pages/BasePage";
import Login from './pages/Login'
import Register from "./pages/Register";
import StudentPage from "./pages/StudentPage";
import JoinRoom from "./pages/JoinRoom";
import Form from "./pages/form/Form";

import ResultPage from "./pages/Result";
import TeacherPage from "./pages/TeacherPage";
import CreateRoom from "./pages/CreateRoom";
import RoomList from "./pages/RoomList";
// hooks
import { useState } from "react";

// styles
import "./App.css";
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom'  

const App = () => {
  const [role, updateRole] = useState('')
  const [happinessIndex,updateHappinessIndex] = useState('')

  return (
    <div className="w-screen h-screen ">
      <Router>
        <Routes>
            <Route path='https://hiren14.github.io/svit-client/' element={<BasePage updateRole={updateRole}/>}></Route>
            <Route path='https://hiren14.github.io/svit-client/login' element={<Login role={role}/>}></Route>
            <Route path='https://hiren14.github.io/svit-client/register' element={<Register/>}></Route>
            <Route path='https://hiren14.github.io/svit-client/student' element={<StudentPage/>}></Route>
            <Route path='https://hiren14.github.io/svit-client/joinroom' element={<JoinRoom/>}></Route>
            <Route path='https://hiren14.github.io/svit-client/form' element={<Form updateHappinessIndex={updateHappinessIndex}/>}></Route>
            <Route path='https://hiren14.github.io/svit-client/result' element={<ResultPage hIndex={happinessIndex}/>}></Route>
            <Route path='https://hiren14.github.io/svit-client/teacherpage' element={<TeacherPage />}></Route>
            <Route path='https://hiren14.github.io/svit-client/createroom' element={<CreateRoom />}></Route>
            <Route path='https://hiren14.github.io/svit-client/roomlist' element={<RoomList/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
