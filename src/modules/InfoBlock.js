import './InfoBlock.css'

function InfoBlock(
    {
        srcImg,
        title='noTitle',
        text,
        gridRow,
        children
    }
) {

    let styleObj = gridRow === 0 ? {} : {gridRow: `span ${gridRow}`};
    return (
        
        <div className='grid-child' style={styleObj}> 
            <div className='title'> <img src={srcImg} alt={'logo'}/> {title} </div>
            {children}
        </div>
    );
};

export default InfoBlock;