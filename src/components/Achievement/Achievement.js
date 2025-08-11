import './Achievement.css';
import {useRef} from 'react';
import { motion } from "motion/react"


const Achievement = ({title, description, date, role, img, src, direction}) => {
    let childRef = useRef(null);
        const xInitial = direction === 'left' ? -35 : 35;
    return(
        <motion.div className='achievemnt' ref={childRef}
            initial={{ opacity: 0, x: xInitial }}
            whileInView={{ opacity: 1, x: 0, transition: {delay: 0.2, duration: 0.4} }}
            viewport={{once: false, amount: 0.1}}
            >
            <div className='title-div'> 
                <div className='name'>
                    <div className='title'>
                        <a href={src}>{title}</a>
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
        </motion.div>
    );
}

export default Achievement;