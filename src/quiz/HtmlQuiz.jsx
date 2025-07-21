import React, { useEffect, useState } from 'react'
import '../style/Quiz.css'
function HtmlQuiz() {
  const Quiz = [
    {
      id: 1,
      savol: "HTML nima ? "
    },
    {
      id: 2,
      savol: 'HTML strukturasi qanday ? '
    },
    {
      id: 3,
      savol: 'Element nima ?'
    },
    {
      id: 4,
      savol: 'Element nima ?'
    },
    {
      id: 5,
      savol: ' Empty element va nested element farqi '
    },
    {
      id: 6,
      savol: 'Tag va attribute farqi '
    },
    {
      id: 7,
      savol: ' <sub></sub> va <sup></sup> elementning vazifasi nima ? '
    },
    {
      id: 8,
      savol: 'HTML da qanday stil beriladi ? '
    },
    {
      id: 9,
      savol: 'target="_blank" nima uchun ishlatiladi ? '
    },
    {
      id: 10,
      savol: 'Qisqacha jadval strukturasini yozib bering ( jadval hosil qilib bering) '
    },
    {
      id: 11,
      savol: 'Necha xil ro’yxat (list) yaratish mumkin va qaysi taglar orqali ?'
    },
    {
      id: 12,
      savol: 'id va class farqi ? '
    },
    {
      id: 13,
      savol: 'Block va inline elementlarning farqi ? '
    },
    {
      id: 14,
      savol: 'label tegi nima uchun ishlatiladi ? '
    },
    {
      id: 15,
      savol: 'inputning qanday typelarini bilasiz va nima uchun ishlatiladi ? '
    },
    {
      id: 16,
      savol: 'iv va span teglarining farqi ?'
    },
    {
      id: 17,
      savol: '“Semantic” elementlar qaysilar ?'
    },
    {
      id: 18,
      savol: 'head elementi nimalarni o’z ichiga oladi ? '
    },
    {
      id: 19,
      savol: 'img, audio, video lar qanday qo’yiladi ? '
    },
    {
      id: 20,
      savol: 'Men "fullstack" dasturchi bo‘laman. shu matnni html elementlari orqali  yozing ?'
    },
  ]
  const [text, setText] = useState({})
  useEffect(() => {
    const saved = localStorage.getItem('quiz')
    if (saved) setText(JSON.parse(saved))
  }, [])

  const handleChange = (id, value) => {
    const upded = { ...text, [id]: value }
    setText(upded)
    localStorage.setItem('quiz', JSON.stringify(upded))
  }

  return (
    <>
      <div className="container">

        {
          Quiz.map((item, index) => (
            <div className='cart-quiz' key={index}>
              <h1>{item.id}</h1>
              <h2>{item.savol}</h2>
              <textarea value={text[item.id]} onChange={(e) => handleChange(item.id, e.target.value)} name="" id="" placeholder='Javobni yoz..'></textarea>
            </div>
          ))
        }
        <button>Check</button>

      </div>
    </>
  )
}

export default HtmlQuiz