import './ProjectBox.css'
import Project from '../Project/Project.js'


let projects = [{
        title: 'Помощник юриста',
        description:`Сайт для быстрого заполнения юридических документов`,
        img:`${process.env.PUBLIC_URL}/assets/LawyearHelper.jpg`,
        technologies: ['React', 'JS', 'Flask'],
    },
    {
        title: 'Голос победы',
        description:`Музыкальная библиотека с функцией реставрации песен военных лет`,
        img:`${process.env.PUBLIC_URL}/assets/VictoryVoice.jpg`,
        technologies: ['VueJS', 'JS', 'ASP.NET Core'],
    },
    {
        title: 'Интернет-магазин',
        description:`Сайт с каталогом товаров, поиском, сортировкой и корзиной. Сохранение корзины с помощью локального хранилища`,
        img:`${process.env.PUBLIC_URL}/assets/VictoryVoice.jpg`,
        technologies: ['React', 'Redux', 'JS', 'Bootstrap'],
    },
]

const ProjectBox = () => {
    return(
        <div className='project-box row g-3 align-items-stretch'>
            {projects.map(pro => <Project title={pro.title} description={pro.description} img={pro.img} key={pro.title} list={pro.technologies}/>)}
        </div>
    );
}

export default ProjectBox;