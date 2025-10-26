function Navbar() {
    return <nav className="navbar navbar-expand-lg bg__secondary">
    <div className="container">
        <a className="navbar-brand fw-bold text-light text-uppercase" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-3">
                <li className="nav-item">
                    <a className="nav-link fw-bold text-light text-uppercase bg__primary rounded-1 active" aria-current="page" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-bold text-light text-uppercase" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-bold text-light text-uppercase" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    </nav>
}

export default Navbar