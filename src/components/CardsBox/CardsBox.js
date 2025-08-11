import './CardsBox.css'
import Card from '../Card/Card.js'
import { v4 } from 'uuid'

let technologies = ['React', 'Redux', 'React Router', 'HTML', 'CSS', 'JS', 'TS', 'Bootstrap', 'Framer-Motion', 'ESLint', 'jest', 'Webpack', 'Docker', 'Git', 'SASS', 'SCSS', 'Python', 'C++', 'PostgreSQL', 'Figma'];

const CardsBox = () => {
    return(
        <div className='cards-div'>
            {technologies.map(tech => <Card title={tech} key={v4()}></Card>)}
        </div>
    );
}

export default CardsBox;