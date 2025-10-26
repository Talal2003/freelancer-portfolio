import cabin from '../../Images/Portfolio/cabin.webp'
import cake from '../../Images/Portfolio/cake.webp'
import circus from '../../Images/Portfolio/circus.webp'
import game from '../../Images/Portfolio/game.webp'
import safe from '../../Images/Portfolio/safe.webp'
import submarine from '../../Images/Portfolio/submarine.webp'

function Portfolio() {
    return <>
    <div className="container p-5">
        <div className="d-flex flex-column align-items-center gap-3 p-5">
            <h2 className="section-title text__secondary text-uppercase fw-bold">Portfolio</h2>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 col-s-12">
                    <img src={cabin} className='img-fluid rounded-2' alt="" />
                </div>
                <div className="col-lg-4 col-md-6 col-s-12">
                    <img src={cake} className='img-fluid rounded-2' alt="" />
                </div>
                <div className="col-lg-4 col-md-6 col-s-12">
                    <img src={circus} className='img-fluid rounded-2' alt="" />
                </div>
                <div className="col-lg-4 col-md-6 col-s-12">
                    <img src={game} className='img-fluid rounded-2' alt="" />
                </div>
                <div className="col-lg-4 col-md-6 col-s-12">
                    <img src={safe} className='img-fluid rounded-2' alt="" />
                </div>
                <div className="col-lg-4 col-md-6 col-s-12">
                    <img src={submarine} className='img-fluid rounded-2' alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Portfolio