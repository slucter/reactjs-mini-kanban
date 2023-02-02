import icon from '../assets/svg/plus.svg'
import { Button } from '../components'

export function Dashboard () {
    return (
        <div className="page">
            <nav className="page__navbar">
                <span className="page__navbar__title">Product Roadmap</span>
                <Button icon={<img className="button__icon" src={icon} alt="icon"></img>} />
            </nav>

            <section className="page__container">
                <div className="page__container__row page__container__row--horizontal-scroll">
                    <div className="page__container__col page__container__col--primary">
                        <div className="page__container__col__badge">Group Task 1</div>
                        <span className="page__container__col__title"></span>
                    </div>
                </div>
            </section>
        </div>
    )
}