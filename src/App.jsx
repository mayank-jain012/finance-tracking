import DashBoard from './component/DashBoard'
import SignUp from './component/SignUp'
import './App.css'
import './style.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />}/>
        <Route path="/dashboard" element={<DashBoard />}/>
      </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
