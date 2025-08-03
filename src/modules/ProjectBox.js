import './ProjectBox.css'
import Project from './Project.js'
import { v4 } from 'uuid'
import LawyerHelper from '../assets/LawyearHelper.jpg'
import VictoryVoiceImg from '../assets/VictoryVoice.jpg'


let projects = [{
        title: 'Помощник юриста',
        description:`Сайт, позволяющий быстро заполнять юридические документы`,
        img:LawyerHelper,
    },
    {
        title: 'Голос победы',
        description:`Веб-приложение с библиотекой музыки и функцией реставрации песен военных лет`,
        img:VictoryVoiceImg,
    },
    {
        title: 'Что то',
        description:`Что то будет`,
        img:VictoryVoiceImg,
    },
]

function ProjectBox(){
    return(
        <div className='project-box row g-3'>
            {projects.map(pro => <Project title={pro.title} description={pro.description} img={pro.img} key={v4()}/>)}
        </div>
    );
}

export default ProjectBox;