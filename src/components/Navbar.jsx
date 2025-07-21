import React from 'react'
import '../style/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <nav>
        <Link to={'/'} className='logo'>Quiz</Link>
        <div className="right-nav">
          <button>Add Quiz</button>
          <button>Rename Quiz</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar