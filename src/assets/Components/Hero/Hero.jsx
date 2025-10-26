import style from './hero.module.css'
import portfolioIcon from '../../svg/avataaars.svg'

function Hero() {
    return <>
    <div className="bg__primary">
        <div className="container p-5">
            <div className="container d-flex flex-column align-items-center gap-3 p-5">
                <img className={style.portfolioIcon} src={portfolioIcon} alt="" />
                <h1 className={`${style.title} text-uppercase fw-bold text-light`}>Start Bootstrap</h1>
                <p className='text-light fs-4'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </div>
    </>
}

export default Hero