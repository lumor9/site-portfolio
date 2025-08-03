import './AchievementBox.css'
import Achievement from './Achievement.js'
import { v4 } from 'uuid'


let achievements = [
    {
        title: 'Победитель Хакатон "Код Победы"',
        description:`В составе команды разрабатывала информационную
            систему для хранения песен военных лет и их
            восстановления с помощью искусственного интеллекта.
            Занималась созданием UI/IX дизайна в Figma, написанием
            всей frontend части приложения на Vue.js, а так же
            продумывала структуру приложения`,
        date:'Июнь 2025',
        role:'Frontend разработчик',
        img:'',
        src:'https://www.mirea.ru/news/podvedeny-itogi-studencheskogo-khakatona-kod-pobedy/',
    },
    {
        title: 'Финалист ФИЦ Хакатон',
        description:`Вместе с командой разработала веб-приложение для автоматизации
            создания юридических документов. Разработала UI/UX дизайн,
            написала всю frontend часть приложения на React`,
        date:'Декабрь 2024',
        role:'Frontend разработчик',
        img:'',
        src:'https://xn--2024-94d5ep.xn--p1ai/#forumtracks',
    },
];

function AchievementBox(){
    return(
        <div className='achievements-box'>
          {achievements.map((ach, ind) => <Achievement title={ach.title} description={ach.description} date={ach.date} img={ach.img} role={ach.role} key={v4()} src={ach.src} direction={ind%2 === 0 ? 'left' : 'right'}/>)}
        </div>
    )
}

export default AchievementBox;