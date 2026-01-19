import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './Layout'
import LoginLayout from './LoginLayout'

import Home from './Home'

import Login from './pages/Authorisation/Login'
import Register from './pages/Authorisation/Register'

import Dashboard from './pages/Dashboard/Dashboard'

import Projects from './pages/ProjectList/Projects'
import ProjectCreate from './pages/ProjectList/projectCreate'
import ProjectDetail from './pages/ProjectList/projectDetail'
import ProjectList from './pages/ProjectList/projectList'

import Tasks from './pages/Tasks/Tasks'
import MyTask from './pages/Tasks/MyTasks'
import TaskBoard from './pages/Tasks/TaskBoard'
import TaskCreate from './pages/Tasks/TaskCreate'
import TaskDetail from './pages/Tasks/TaskDetail'
import TaskEdit from './pages/Tasks/TaskEdit'

import User from './pages/Users/User'
import Role from './pages/Users/Role'
import UserCreate from './pages/Users/UserCreate'
import UserEdit from './pages/Users/UserEdit'
import UserList from './pages/Users/UserList'

import Profile from './pages/profile/Profile'
import Settings from './pages/profile/settings'

import Report from './pages/report/Reports'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<LoginLayout/>}>
          <Route path='/Login' element = {<Login/>}/>
          <Route path='/Register' element = {<Register/>}/>
        </Route>

          <Route index element={<Home/>}/>
        <Route path = '/' element = {<Layout/>}>
          <Route path='/Dashboard' element = {<Dashboard/>}/>
          <Route path="/Projects" element = {<Projects/>}/>
          <Route path='/ProjectCreate' element = {<ProjectCreate/>}/>
          <Route path='/ProjectDetail/:id' element = {<ProjectDetail/>}/>
          <Route path='/ProjectList' element = {<ProjectList/>}/>
          <Route path='/Tasks' element = {<Tasks/>}/>
          <Route path='/MyTask' element = {<MyTask/>}/>
          <Route path='/TaskBoard' element = {<TaskBoard/>}/>
          <Route path='/TaskCreate' element = {<TaskCreate/>}/>
          <Route path='/TaskDetail/:id' element = {<TaskDetail/>}/>
          <Route path='/TaskEdit' element = {<TaskEdit/>}/>
          <Route path='User' element = {<User/>}/>
          <Route path='/Role' element = {<Role/>}/>
          <Route path='/UserCreate' element = {<UserCreate/>}/>
          <Route path='/UserEdit/:id' element = {<UserEdit/>}/>
          <Route path='/UserList' element = {<UserList/>}/>
          <Route path='/Profile' element = {<Profile/>}/>
          <Route path='/Settings' element = {<Settings/>}/>
          <Route path='/Reports' element = {<Report/>}/>
        </Route>
      </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
