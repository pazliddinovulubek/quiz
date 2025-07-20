import React from 'react'
import '../style/Navbar.css'
import { Link } from 'react-router-dom'
function Quiz() {
  return (
    <>
      <main>
        <div className="language-cart">
          <h1>Html</h1>
          <p>Html boyicha savolarni yechish uchun tugmani bosing</p>
          <button><Link to={'html'} className='btn'>Start Quiz</Link></button>
        </div>
        <div className="language-cart">
          <h1>Css</h1>
          <p>Css boyicha savolarni yechish uchun tugmani bosing</p>
          <button><Link to={'css'} className='btn'>Start Quiz</Link></button>

        </div>
        <div className="language-cart">
          <h1>JavaScript</h1>
          <p>JavaScript boyicha savolarni yechish uchun tugmani bosing</p>
          <button><Link to={'js'} className='btn'>Start Quiz</Link></button>

        </div>
        <div className="language-cart">
          <h1>React</h1>
          <p>React boyicha savolarni yechish uchun tugmani bosing</p>
          <button><Link to={'react'} className='btn'>Start Quiz</Link></button>

        </div>
      </main>
    </>
  )
}

export default Quiz