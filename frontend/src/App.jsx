import { useState } from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navbar'
import About from './components/About'
import Complaint from './components/Complaint'
import Footer from './components/BottomSection'
import Modal from './components/Modal'

function App() {
const [showModal, setShowModal] = useState(false)
  console.log('showModal',showModal)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
            <Navigation setShowModal={setShowModal} />
            <About/>
            <Complaint />
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <Footer/>
            </>
            } />
  
        </Routes>
      </Router>
    </>
  )
}

export default App
