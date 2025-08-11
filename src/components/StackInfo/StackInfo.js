import './StackInfo.css';

const StackInfo = ({stackArray}) => {
    return(
        <div className='stackInfo'>
            {stackArray.map(elem => <div>{elem}</div>)}
        </div>
    )
}

export default StackInfo;