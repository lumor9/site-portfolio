import './ProjectBox.css'
import Project from './Project.js'
import { v4 } from 'uuid'
import LawyerHelper from '../assets/LawyearHelper.jpg'
import VictoryVoiceImg from '../assets/VictoryVoice.jpg'


let projects = [{
        title: 'Помощник юриста',
        description:`Сайт для быстрого заполнения юридических документов`,
        img:LawyerHelper,
        technologies: ['React', 'JS', 'Flask'],
    },
    {
        title: 'Голос победы',
        description:`Музыкальная библиотека с функцией реставрации песен военных лет`,
        img:VictoryVoiceImg,
        technologies: ['VueJS', 'JS', 'ASP.NET Core'],
    },
    {
        title: 'Что то',
        description:`Что то будет`,
        img:VictoryVoiceImg,
        technologies: ['VueJS', 'JS', 'ASP.NET Core'],
    },
]

function ProjectBox(){
    return(
        <div className='project-box row g-3 align-items-stretch'>
            {projects.map(pro => <Project title={pro.title} description={pro.description} img={pro.img} key={v4()} list={pro.technologies}/>)}
        </div>
    );
}

export default ProjectBox;