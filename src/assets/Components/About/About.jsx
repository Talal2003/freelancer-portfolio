import style from './about.module.css'
import downloadIcon from './../../svg/download-fill-svgrepo-com.svg'

function About() {
    return <>
    <div className="bg__primary">
        <div className="container p-5">
            <div className="d-flex flex-column align-items-center gap-3 p-5">
                <h2 className='section-title text-uppercase fw-bold text-light'>About</h2>
                <div className="col-xl-9">
                    <div className='row'>
                        <div className={`col-6 ${style.leftParagraph}`}>
                            <p className="text-light fs-5">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className={`col-6 ${style.rightParagraph}`}>
                            <p className="text-light fs-5">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-outline-light px-4 py-3 d-flex gap-2 fs-5">
                    <img src={downloadIcon} className={style.downloadIcon} alt=""/>
                    Free Download!
                </button>
            </div>
        </div>
    </div>
    </>
}

export default About