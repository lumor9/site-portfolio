import './InfoBlock.css';
import {useRef} from 'react';


function InfoBlock(
    {
        srcImg,
        title='noTitle',
        children
    }
) {
    let childRef = useRef(null);
    const handleMouseMove = (e) => {
        if (!childRef.current) return;
        
        const rect = childRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        childRef.current.style.setProperty('--x', `${x}px`);
        childRef.current.style.setProperty('--y', `${y}px`);
    };
    return (
        
        <div className='grid-child'
            ref={childRef}
            onMouseMove={handleMouseMove}
        > 
            <div className='title'> <img src={srcImg} alt={'logo'}/> {title} </div>
            {children}
        </div>
    );
};

export default InfoBlock;