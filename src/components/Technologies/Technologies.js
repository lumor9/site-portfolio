import './Technologies.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Technologies = ({list}) => {
    return(
        <div className='technologies d-flex flex-row gap-3 flex-wrap'>
            {list.map(tech => <div key={tech}><p>{tech}</p></div>)}
        </div>
    )
}

export default Technologies;