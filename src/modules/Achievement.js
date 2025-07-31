import './Achievement.css'

function Achievement({title, description, date, role, img}){
    return(
        <div className='achievemnt'>
            <div> 
                <div>
                    {title}
                    {role}
                </div>
                {date}
            </div>
        </div>
    );
}

export default Achievement;