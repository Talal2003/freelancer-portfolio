import { Link } from "react-router-dom"

function Navbar() {
    return <nav className="navbar navbar-expand-lg bg__secondary sticky-top">
    <div className="container p-2">
        <Link className="navbar-brand fw-bold text-light text-uppercase fs-2" to={'/'}>Start Bootstrap</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-3">
                <li className="nav-item">
                    <Link className="nav-link fw-bold text-light text-uppercase p-3 rounded-3 bg__primary active" aria-current="page" to={'/portfolio'}>Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fw-bold text-light text-uppercase p-3 rounded-3" to={'/about'}>About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link fw-bold text-light text-uppercase p-3 rounded-3" to={'/contact-me'}>Contact</Link>
                </li>
            </ul>
        </div>
    </div>
    </nav>
}

export default Navbar