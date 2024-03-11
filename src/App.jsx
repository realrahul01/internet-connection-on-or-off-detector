import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import {Routes,Route} from 'react-router-dom'
import Login from './component/Login'
import Registration from './component/Registration'

function App() {

  return (
    <>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/newuser' element={<Registration/>}/>
    </Routes>
      
    </>

  )
}

export default App
