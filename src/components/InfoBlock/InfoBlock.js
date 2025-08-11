import './InfoBlock.css';
import {useRef} from 'react';


const InfoBlock = (
    {
        srcImg,
        title='noTitle',
        children
    }
) => {
    let childRef = useRef(null);
    return (
        
        <div className='grid-child'
            ref={childRef}
        > 
            <div className='title'> <img src={srcImg} alt={'logo'}/> {title} </div>
            {children}
        </div>
    );
};

export default InfoBlock;