function Button (props) {
    return (
        <button className={`button button--${props.type}`}>
            {props.icon}
            Add New Group
        </button>
    )
}

Button.defaultProps = {
    type : 'primary'
}

export default Button