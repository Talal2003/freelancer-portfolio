function Navbar() {
    return <nav className="navbar navbar-expand-lg bg__secondary sticky-top">
    <div className="container p-2">
        <a className="navbar-brand fw-bold text-light text-uppercase fs-2" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-3">
                <li className="nav-item">
                    <a className="nav-link fw-bold text-light text-uppercase p-3 rounded-3 bg__primary active" aria-current="page" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-bold text-light text-uppercase p-3 rounded-3" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-bold text-light text-uppercase p-3 rounded-3" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    </nav>
}

export default Navbar