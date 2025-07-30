import educationImg from './assets/Education.png'
import linkImg from './assets/Link.png'
import './App.css';
import { v4 } from 'uuid'
import fetch from 'isomorphic-fetch'
import { Component } from 'react';

import DarkVeil from './modules/DarkVeil.js';
import Navbar from './modules/Navbar.js'
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <DarkVeil hueShift={16} speed={1}/>
        <Navbar/>
        <div className='text'>
          <p>Меня зовут <span>Арина</span></p>
          <p>Я <span>Frontend</span> разработчик</p>
        </div>
      </header>
      
      <main>
        <div className='App-main-div'>
          <div className='div-title'>
            <p>Обо мне</p>
          </div>
          <div className='div-boxes'>
            <div className='grid-child'> 
              <div className='title'> <img src={educationImg}/> Образование </div>
              <div className='text'> <p> Учусь на 3 курсе РТУ МИРЭА по направлению Фуллстэк-разработка </p></div>
            </div>

            <div className='grid-child'> f</div>
            <div className='grid-child big'> sf</div>
          </div>
          
        </div>


      </main>
      
      <footer>

      </footer>
    </div>
  );
}

export default App;
