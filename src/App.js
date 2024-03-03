import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PreHome from './pages/PreHome'
import Home from './pages/Home'
import SelectChar from './pages/CreateChar/SelectChar'
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
      </Routes>
    </Router>
  )
}
