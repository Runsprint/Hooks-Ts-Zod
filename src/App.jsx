import { Routes,Route } from 'react-router-dom'
import Validation from './Components/Validation/Validation'
import User from './Components/User/User'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Validation/>}/>
        <Route path='User' element={<User/>} />
      </Routes>
  )
}

export default App
