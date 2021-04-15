

const Button = ({onClick, text, color}) => {
    return <button 
    onClick={onClick} 
    className='btn'
    style={{background: color}}>{text}</button>
}

export default Button
