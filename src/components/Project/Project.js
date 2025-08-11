import './Project.css'
import {useRef} from 'react';
import { motion } from "motion/react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Technologies from '../Technologies/Technologies.js';

const Project = ({
    title,
    description,
    img,
    list,
}) => {
    let childRef = useRef(null);
        
    return(
        <motion.div className='col-lg-4 col-md-6 col-12' ref={childRef}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0, transition: {delay: 0.2, duration: 0.4} }}
            viewport={{once: false, amount: 0.1}}
        >
            <div className='project'>
                <div className = 'top'>
                    <div className='img-div'>
                        <img src={img} alt={title} />
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
                <div>
                    <Technologies list={list}/>
                </div>
            </div>
            
        </motion.div>
    );
}

export default Project;