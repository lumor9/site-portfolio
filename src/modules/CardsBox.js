import './CardsBox.css'
import Card from './Card.js'
import { v4 } from 'uuid'

let technologies = ['React', 'Redux', 'HTML', 'CSS', 'JS', 'TS', 'ESLint', 'jest', 'Docker', 'Git', 'SASS', 'SCSS', 'Python', 'C++', 'PostgreSQL', 'Figma'];

function CardsBox(){
    return(
        <div className='cards-div'>
            {technologies.map(tech => <Card title={tech} key={v4()}></Card>)}
        </div>
    );
}

export default CardsBox;