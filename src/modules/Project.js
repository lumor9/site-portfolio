import './Project.css'

function Project({
    title,
    description,
    img
}){
    return(
        <div className='project'>
            <div className='img-div'>
                <img src={img} alt='project'/>
            </div>
            <div className='text'>
                <div className='title'>
                    {title}
                </div>
                <div className='description'>
                    {description}
                </div>
            </div>
        </div>
    );
}

export default Project;