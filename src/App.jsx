import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './paginas/home/Home'
import './App.css'
import Trabalho from './paginas/trabalhos/Trabalho';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/trabalho/:id" element={<Trabalho />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
