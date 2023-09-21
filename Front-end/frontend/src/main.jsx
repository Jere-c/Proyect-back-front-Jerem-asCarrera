import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Update from './components/update'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import CreateUsers from './components/Createusers.jsx'
import Getposts from './components/GetPost.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<App />} />
        <Route path="update" element={<Update />} />
        <Route path="createuser" element={<CreateUsers />} />
        <Route path="getposts" element={<Getposts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
