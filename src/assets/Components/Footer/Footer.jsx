import style from './footer.module.css'
import facebookIcon from './../../svg/facebook-176-svgrepo-com.svg'
import twitterIcon from './../../svg/twitter-154-svgrepo-com.svg'
import linkedInIcon from './../../svg/linkedin-161-svgrepo-com.svg'
import webIcon from './../../svg/web-svgrepo-com.svg'

function Footer() {
    return <footer>
        <div className="bg__secondary">
            <div className="container p-5">
                <div className="row text-center justify-content-between">
                    <div className="col-4 d-flex flex-column gap-2">
                        <h4 className="fw-bold text-light text-uppercase">Location</h4>
                        <p className="text-light fs-5">2215 John Daniel Drive<br/>Clark, MO 65243</p>
                    </div>
                    <div className="col-4 d-flex flex-column gap-2">
                        <h4 className="fw-bold text-light text-uppercase">Around The Web</h4>
                        <ul className="nav d-flex justify-content-center gap-2">
                            <li>
                                <a className={`${style.socialBtn} btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center`} href="#">
                                    <img src={facebookIcon} className={style.socialIcon} alt="" />
                                </a>
                            </li>
                            <li>
                                <a className={`${style.socialBtn} btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center`} href="#">
                                    <img src={twitterIcon} className={style.socialIcon} alt="" />
                                </a>
                            </li>
                            <li>
                                <a className={`${style.socialBtn} btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center`} href="#">
                                    <img src={linkedInIcon} className={style.socialIcon} alt="" />
                                </a>
                            </li>
                            <li>
                                <a className={`${style.socialBtn} btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center`} href="#">
                                    <img src={webIcon} className={style.socialIcon} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4 d-flex flex-column gap-2">
                        <h4 className="fw-bold text-light text-uppercase">About Freelancer</h4>
                        <p className="text-light fs-5">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by <a className="text__primary" href="#">Start Bootstrap</a>.</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className={style.copyrightBar}>
                <div className="container text-center">
                    <p className='p-4 text-light mb-0'>Copyright © Your Website 2023</p>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer