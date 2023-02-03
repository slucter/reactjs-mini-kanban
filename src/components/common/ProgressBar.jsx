function ProgressBar ({progress}) {
    return (
        <div className="progress-bar">
            <div className={`progress-bar__inner progress-bar__inner--${progress < 100 ? 'primary' : 'green'}`} style={{'width': (progress || 0) + '%'}}></div>
        </div>
    )
}

export default ProgressBar