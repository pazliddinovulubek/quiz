import React from 'react'
import '../style/Navbar.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function Quiz() {
  AOS.init();

  AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,


    offset: 120,
    delay: 0,
    duration: 800,
    easing: 'ease',
    once: false,
    anchorPlacement: 'top-bottom',

  });
  return (
    <>
      <main>
        <div className="language-cart" data-aos="fade-up-right">
          <h1>Html</h1>
          <p>Html boyicha savolarni yechish uchun tugmani bosing</p>
          <button><Link to={'html'} className='btn'>Start Quiz</Link></button>
        </div>
        <div className="language-cart"  data-aos="fade-left">
          <h1>Css</h1>
          <p>Css boyicha savolarni yechish uchun tugmani bosing</p>
          <button><Link to={'css'} className='btn'>Start Quiz</Link></button>

        </div>
        <div className="language-cart" data-aos="fade-up-left">
          <h1>JavaScript</h1>
          <p>JavaScript boyicha savolarni yechish uchun tugmani bosing</p>
          <button><Link to={'js'} className='btn'>Start Quiz</Link></button>

        </div>
        <div className="language-cart" data-aos="fade-down-right">
          <h1>React</h1>
          <p>React boyicha savolarni yechish uchun tugmani bosing</p>
          <button><Link to={'react'} className='btn'>Start Quiz</Link></button>

        </div>
      </main>
    </>
  )
}

export default Quiz