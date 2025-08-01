import educationImg from './assets/Education.png'
import linkImg from './assets/Link.png'
import codeImg from './assets/Code.png'
import './App.css';

import InfoBlock from './modules/InfoBlock.js'
import DarkVeil from './modules/DarkVeil.js';
import Navbar from './modules/Navbar.js'
import CardsBox from './modules/CardsBox.js'
import AchievementBox from './modules/AchievementBox.js'



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
            <InfoBlock title='Образование'srcImg={educationImg}><p>Учусь на 3 курсе РТУ МИРЭА по направлению Фуллстэк-разработка</p></InfoBlock>
            <InfoBlock title='Контакты' srcImg={linkImg}> 
              <nav>
                <li>Почта</li>
                <li>Телеграм</li>
                <li>Гитхаб</li>
                <li>Резюме</li>
              </nav> 
            </InfoBlock>
            <InfoBlock gridRow={2} title={'Технологии'} srcImg={codeImg}><CardsBox/></InfoBlock>
          </div>
        
          <div className='div-title'>
              <p>Достижения</p>
          </div>
          <AchievementBox/>

          <div className='div-title'>
              <p>Проекты</p>
          </div>
        </div>
        
      </main>
      
      <footer>

      </footer>
    </div>
  );
}

export default App;
