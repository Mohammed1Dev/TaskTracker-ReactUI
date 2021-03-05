import ProtoTypes from 'prop-types'
const Button = ({color, text, onClick}) => {
    return (
        <div>
            <button style={{backgroundColor: color}}
                    className='btn'
                    onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: ProtoTypes.string.isRequired,
    color:ProtoTypes.string,
    onClick: ProtoTypes.func.isRequired
}

export default Button
