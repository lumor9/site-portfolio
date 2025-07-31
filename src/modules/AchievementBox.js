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
    },
];

function AchievementBox(){
    return(
        <div className='achievements-box'>
          {achievements.map(ach => <Achievement title={ach.title} description={ach.description} date={ach.date} img={ach.img} role={ach.role} key={v4()}/>)}
        </div>
    )
}

export default AchievementBox;