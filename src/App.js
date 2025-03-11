import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PreHome from './pages/PreHome'
import Home from './pages/Home'
import CreateChar from './pages/CreateChar'
import MyChar from './pages/MyChar'
import StartAdventure from './pages/StartAdventure'
import './styles/colors.css'
import './styles/global-div.css'
import './styles/global-label.css'
import './styles/global.css'
import './styles/keyframes.css'

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
          path="/createChar"
          element={
            <div className="mainscreen">
              <CreateChar />
            </div>
          }
        />
        <Route
          path="/myChar"
          element={
            <div className="mainscreen">
              <MyChar />
            </div>
          }
        />
        <Route
          path="/startAdventure"
          element={
            <div className="mainscreen">
              <StartAdventure />
            </div>
          }
        />
      </Routes>
    </Router>
  )
}
