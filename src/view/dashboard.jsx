import iconPlus from '../assets/svg/plus.svg'
import iconPlusRounded from '../assets/svg/u_plus-circle.svg'
import { Badge, Button, Card } from '../components'

export function Dashboard () {
    return (
        <div className="page">
            <nav className="page__navbar">
                <span className="page__navbar__title">Product Roadmap</span>
                <Button>
                    <img className="button__icon" src={iconPlus} alt="icon"></img>
                    Add New Group
                </Button>
            </nav>

            <section className="page__container">
                <div className="page__container__row page__container__row--horizontal-scroll">
                    <div className="page__container__col page__container__col--primary">
                        <div className="page__container__col__wrap">
                            <div className="page__container__col__wrap__badge">
                                <Badge theme="primary">Group Task 1</Badge>
                            </div>
                            <span className="page__container__col__wrap__title">January - March</span>
                            <Card />
                            <Button theme="blank">
                                <img src={iconPlusRounded} alt="icon"></img>
                                New task
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}