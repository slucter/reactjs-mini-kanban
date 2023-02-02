function Button (props) {
    return (
        <button className={`button button--${props.theme}`}>
            {props.children}
        </button>
    )
}

Button.defaultProps = {
    theme : 'primary'
}

export default Button