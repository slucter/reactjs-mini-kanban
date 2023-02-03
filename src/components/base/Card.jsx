import iconThreeDot from '../../assets/svg/fi_more-horizontal.svg'
import iconChecklis from '../../assets/svg/checklist.svg'
import { ProgressBar } from '../common'

function Card () {
    return (
        <div className="card">
            <span className="card__title">
                Re-designed the zero-g doggie bags. No more spills!
            </span>
            <div className="card__status">
                <div className="card__status__progress">
                    <div className="card__status__progress__bar">
                        <ProgressBar progress={100}/>
                    </div>
                    {/* <div className="card__status__progress__count">30%</div> */}
                    <img className="card__status__progress__done" src={iconChecklis} alt="icon"></img>
                </div>
                <div className="card__status__btn">
                    <img src={iconThreeDot} alt="icon"/>
                </div>
            </div>
        </div>
    )
}

export default Card