import { Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Fruits from './pages/Fruits'
import CreateFruits from './pages/CreateFruits'
import CreateVeggies from './pages/CreateVeggies'
import Veggies from './pages/Veggies'

function App() {
  return (
    <>
    <nav>
      <Link to="/">
        <button>Fruits</button>
      </Link>
      <Link to="/create">
        <button>Create New Fruits</button>
      </Link>
      <Link to="/veggies">
        <button>Veggies</button>
      </Link>
      <Link to="/veggies/create">
        <button>Create New Veggies</button>
      </Link>
    </nav>
    <Routes>
      <Route path='/' element={<Fruits />} />
      <Route path='/create' element={<CreateFruits />}/>
      <Route path='/veggies' element={<Veggies />} />
      <Route path='/veggies/create' element={<CreateVeggies />} />
    </Routes>
    </>
  )
}
export default App