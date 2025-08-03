import educationImg from './assets/Education.png'
import linkImg from './assets/Link.png'
import codeImg from './assets/Code.png'
import './App.css';
import { motion } from "motion/react"

import InfoBlock from './modules/InfoBlock.js'
import DarkVeil from './modules/DarkVeil.js';
import Navbar from './modules/Navbar.js'
import CardsBox from './modules/CardsBox.js'
import AchievementBox from './modules/AchievementBox.js'
import ProjectBox from './modules/ProjectBox.js'



function App() {
  return (
    <div className='App'>
      <motion.header 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1, transition: {delay: 0.1, duration: 0.6} }}
        viewport={{once: true, amount: 0.1}}
        className='App-header'
      >
        <DarkVeil hueShift={16} speed={1}/>
        <Navbar/>
        <div className='text' id='hello'>
          <p>Меня зовут <span>Арина</span></p>
          <p>Я <span>Frontend</span> разработчик</p>
        </div>
      </motion.header>
      
      <main>
        <div className='App-main-div'>
          <motion.div className='div-title' id='aboutMe'
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0, transition: {delay: 0.2, duration: 0.3} }}
          viewport={{once: false, amount: 0.1}}
          >
            <p>Обо мне</p>
          </motion.div>
          <div className='div-boxes'>
            <motion.div 
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0, transition: {delay: 0.2, duration: 0.3} }}
              viewport={{once: false, amount: 0.1}}
            >
              <InfoBlock title='Образование'srcImg={educationImg}><p>Учусь на 3 курсе РТУ МИРЭА по направлению Фуллстэк-разработка</p></InfoBlock>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0, transition: {delay: 0.2, duration: 0.3} }}
              viewport={{once: false, amount: 0.1}}
            >
              <InfoBlock title='Контакты' srcImg={linkImg}> 
                <nav>
                  <li><a href='andronovaarina70@gmail.com'>Почта</a></li>
                  <li><a href='https://t.me/lumor9'>Телеграм</a></li>
                  <li><a href='https://github.com/lumor9'>Гитхаб</a></li>
                  <li><a href=''>Резюме</a></li>
                </nav> 
              </InfoBlock>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0, transition: {delay: 0.2, duration: 0.3} }}
              viewport={{once: false, amount: 0.1}}
              id='technologies'
            >
              <InfoBlock title={'Технологии'} srcImg={codeImg}><CardsBox/></InfoBlock>
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
      >
        <div><hr></hr></div>
        <div className='nickName'>lumor9</div>
      </motion.footer>
    </div>
  );
}

export default App;
