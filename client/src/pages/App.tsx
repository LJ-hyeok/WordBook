import { Routes, Route } from 'react-router-dom'
import MainPage from './mainPage'
import Test from './Test'
// import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/test" element={<Test />}/>
      </Routes>
      
    </>
  )
}

export default App
