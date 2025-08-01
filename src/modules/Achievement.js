import './Achievement.css'

function Achievement({title, description, date, role, img}){
    return(
        <div className='achievemnt'>
            <div className='title-div'> 
                <div className='name'>
                    <div className='title'>
                        {title}
                    </div>
                    <div className='role'>
                        {role}
                    </div>
                </div>
                <div className='date'>
                    {date}
                </div>
            </div>
            <div className='description-div'>
                {description}
            </div>
        </div>
    );
}

export default Achievement;