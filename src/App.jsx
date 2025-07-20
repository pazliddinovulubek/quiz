import React from 'react'
import Navbar from './components/Navbar'
import Quiz from './components/Quiz'
import { Routes, Route } from 'react-router-dom'
import HtmlQuiz from './quiz/HtmlQuiz'
import CssQuiz from './quiz/CssQuiz'
import Js from './quiz/Js'
import RRR from './quiz/RRR'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Quiz />} />
        <Route path='html' element={<HtmlQuiz />} />
        <Route path='css' element={<CssQuiz />} />
        <Route path='Js' element={<Js />} />
        <Route path='react' element={<RRR />} />
      </Routes>
    </div>
  )
}

export default App