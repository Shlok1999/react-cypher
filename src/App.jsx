import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Components/Homepage/Homepage'
import Navigation from './Components/Navigation/Navigation'
import Login from './Components/Authentication/Login'
import Signup from './Components/Authentication/Signup'
import AddData from './Components/Add Data/AddData'

function App() {
  const auth = localStorage.getItem('user');
  const result = JSON.parse(auth);

  return (
    <>
      <div>
        <Navigation/>
        <Router>
          <Routes>
            <Route path='/cypher-tech' exact element={<Homepage/>} />
            <Route path='/login' exact element={<Login/>} />
            <Route path='/signup' exact element={<Signup/>} />
            {
              result? <Route path='/add-data' exact element={<AddData/>} /> : null
            }
          </Routes>
        </Router>
      </div>

    </>
  )
}

export default App
