import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/Quiz.css'

function HtmlQuiz() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      once: false,
    });
  }, []);

  const Quiz = [
    { id: 1, savol: "HTML nima ?" },
    { id: 2, savol: 'HTML strukturasi qanday ?' },
    { id: 3, savol: 'Element nima ?' },
    { id: 4, savol: 'Element nima ?' },
    { id: 5, savol: 'Empty element va nested element farqi' },
    { id: 6, savol: 'Tag va attribute farqi' },
    { id: 7, savol: '<sub> va <sup> elementning vazifasi nima ?' },
    { id: 8, savol: 'HTML da qanday stil beriladi ?' },
    { id: 9, savol: 'target="_blank" nima uchun ishlatiladi ?' },
    { id: 10, savol: 'Qisqacha jadval strukturasini yozib bering (jadval hosil qilib bering)' },
    { id: 11, savol: 'Necha xil ro’yxat (list) yaratish mumkin va qaysi taglar orqali ?' },
    { id: 12, savol: 'id va class farqi ?' },
    { id: 13, savol: 'Block va inline elementlarning farqi ?' },
    { id: 14, savol: 'label tegi nima uchun ishlatiladi ?' },
    { id: 15, savol: 'inputning qanday typelarini bilasiz va nima uchun ishlatiladi ?' },
    { id: 16, savol: 'div va span teglarining farqi ?' },
    { id: 17, savol: '“Semantic” elementlar qaysilar ?' },
    { id: 18, savol: 'head elementi nimalarni o’z ichiga oladi ?' },
    { id: 19, savol: 'img, audio, video lar qanday qo’yiladi ?' },
    { id: 20, savol: 'Men "fullstack" dasturchi bo‘laman. shu matnni html elementlari orqali yozing ?' },
  ];

  const [text, setText] = useState({});
  const [name, setName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem('quiz');
    const savedName = localStorage.getItem('quizName');
    if (saved) setText(JSON.parse(saved));
    if (savedName) setName(savedName);
  }, []);

  const handleChange = (id, value) => {
    const updated = { ...text, [id]: value };
    setText(updated);
    localStorage.setItem('quiz', JSON.stringify(updated));
  };

  const sendTelegram = () => {
    const token = '8153231911:AAE8kUrE5l_psPBmWa1rkqLT2dwgUQJqAWo';
    const chatId = '-4863511332';

    let message = `Ismi: ${name || "kiritilmagan"}\n\nHtml Quiz Javoblari:\n\n`;
    Quiz.forEach(item => {
      message += `${item.id}. ${item.savol}\nJavobi: ${text[item.id] || "yo'q"}\n\n`;
    });

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log('Yuborildi:', data);
        alert('Telegramga yuborildi');
        setText({});
        setName('');
        localStorage.removeItem('quiz');
        localStorage.removeItem('quizName');
      })
      .catch(err => {
        console.error('Telegram yuborishda xatolik:', err);
        alert('Yuborilmadi');
      });
  };

  return (
    <div className="container">
      <div className='cart-quiz' data-aos="fade-up">
        <h2>Ismingizni kiriting:</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            localStorage.setItem('quizName', e.target.value);
          }}x
          placeholder='Ismingiz...'
        />
      </div>

      {Quiz.map((item, index) => (
        <div className='cart-quiz' key={index} data-aos="fade-up">
          <h1>{item.id}</h1>
          <h2>{item.savol}</h2>
          <textarea
            value={text[item.id] || ""}
            onChange={(e) => handleChange(item.id, e.target.value)}
            placeholder='Javobni yoz..'
          ></textarea>
        </div>
      ))}

      <button onClick={sendTelegram}>Check</button>
    </div>
  );
}

export default HtmlQuiz;
