import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PreHome from './pages/PreHome'
import Home from './pages/Home'
import SelectChar from './pages/CreateChar/SelectChar'
import WriteName from './pages/CreateChar/WriteName'
import ConfirmName from './pages/CreateChar/ConfirmChar'
import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="mainscreen">
              <PreHome />
            </div>
          }
        />
        <Route
          path="/home"
          element={
            <div className="mainscreen">
              <Home />
            </div>
          }
        />
        <Route
          path="/createChar/selectChar"
          element={
            <div className="mainscreen">
              <SelectChar />
            </div>
          }
        />
        <Route
          path="/createChar/writeName"
          element={
            <div className="mainscreen">
              <WriteName />
            </div>
          }
        />
        <Route
          path="/createChar/confirmChar"
          element={
            <div className="mainscreen">
              <ConfirmName />
            </div>
          }
        />
      </Routes>
    </Router>
  )
}
