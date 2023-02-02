const Badge = (props) => (<div className={`badge badge--${props.theme}`}> {props.children} </div>)
Badge.defaultProps = {
    theme: 'primary'
}

export default Badge