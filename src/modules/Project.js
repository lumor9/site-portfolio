import './Project.css'
import {useRef} from 'react';
import { motion } from "motion/react"

function Project({
    title,
    description,
    img,
}){
    let childRef = useRef(null);
        const handleMouseMove = (e) => {
            if (!childRef.current) return;
            
            const rect = childRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            childRef.current.style.setProperty('--x', `${x}px`);
            childRef.current.style.setProperty('--y', `${y}px`);
        };
        
    return(
        <motion.div className='project' ref={childRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0, transition: {delay: 0.2, duration: 0.4} }}
            viewport={{once: false, amount: 0.1}}
        >
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
        </motion.div>
    );
}

export default Project;