import './App.css';
import { motion } from "motion/react"
import 'bootstrap/dist/css/bootstrap.min.css';

import InfoBlock from './components/InfoBlock/InfoBlock.js'
import DarkVeil from './components/DarkVeil/DarkVeil.js';
import Navbar from './components/Navbar/Navbar.js'
import CardsBox from './components/CardsBox/CardsBox.js'
import AchievementBox from './components/AchievementBox/AchievementBox.js'
import ProjectBox from './components/ProjectBox/ProjectBox.js'



function App() {
  return (
    <div className='App'>

      <motion.header 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1, transition: {delay: 0.1, duration: 1.2} }}
        viewport={{once: true, amount: 0.1}}
        className='App-header container'
      >
        <DarkVeil hueShift={16} speed={1}/>
        <Navbar/>
        <motion.div 
          initial={{ y:35}}
          whileInView={{ y:0, transition: {delay: 0.1, duration: 0.8} }}
          viewport={{once: true, amount: 0.1}}
          className='text' id='hello'>
          <p>Меня зовут <span>Арина</span></p>
          <p>Я <span>Frontend</span> разработчик</p>
        </motion.div>
      </motion.header>
      
      <main>
        <div className='App-main-div container d-flex flex-column gap-4'>

          <div className = 'row'>
            <motion.div className='col-12 div-title' id='aboutMe'
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0, transition: {delay: 0.2, duration: 0.3} }}
              viewport={{once: false, amount: 0.1}}
            >
              <p>Обо мне</p>
            </motion.div>
          </div>
          
          <div className = 'row g-3 align-items-stretch'>
            <div className = 'col-md-6 col-sm-12 d-flex flex-column gap-3'>
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0, transition: {delay: 0.2, duration: 0.3} }}
                viewport={{once: false, amount: 0.1}}
                className='flex-grow-1'
              >
                <InfoBlock title='Образование'srcImg={`${process.env.PUBLIC_URL}/assets/Education.png`}><p>Учусь на 3 курсе РТУ МИРЭА по направлению Фуллстэк-разработка</p></InfoBlock>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0, transition: {delay: 0.2, duration: 0.3} }}
                viewport={{once: false, amount: 0.1}}
                className='flex-grow-1'
              >
                <InfoBlock title='Контакты' srcImg={`${process.env.PUBLIC_URL}/assets/Link.png`}> 
                  <nav className='d-flex flex-lg-row flex-column justify-content-sm-around gap-4 h-100 align-items-lg-start align-items-center'>
                    <li><a href='mailto:andronovaarina70@gmail.com'>Почта</a></li>
                    <li><a href='https://t.me/lumor9'>Телеграм</a></li>
                    <li><a href='https://github.com/lumor9'>Гитхаб</a></li>
                    <li><a href='https://github.com/lumor9'>Резюме</a></li>
                  </nav> 
                </InfoBlock>
              </motion.div>
            </div>
            <motion.div 
              className = 'col-md-6 col-sm-12'
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0, transition: {delay: 0.2, duration: 0.3} }}
              viewport={{once: false, amount: 0.1}}
              id='technologies'
            >
              <InfoBlock title={'Технологии'} srcImg={`${process.env.PUBLIC_URL}/assets/Code.png`}><CardsBox/></InfoBlock>
            </motion.div>
          </div>
          
          <motion.div className='div-title' id='achievements'
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0, transition: {delay: 0.2, duration: 0.3} }}
            viewport={{once: false, amount: 0.1}}
          >
              <p>Достижения</p>
          </motion.div>
          <AchievementBox/>

          <motion.div className='div-title' id='projects'
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0, transition: {delay: 0.2, duration: 0.3} }}
            viewport={{once: false, amount: 0.1}}
          >
              <p>Проекты</p>
          </motion.div>
          <ProjectBox/>
        </div>
        
      </main>
      
      <motion.footer
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0, transition: {delay: 0.2, duration: 0.3} }}
        viewport={{once: false, amount: 0.1}}
        className='container'
      >
        <div><hr></hr></div>
        <div className='nickName'>lumor9</div>
      </motion.footer>

    </div>
  );
}

export default App;
