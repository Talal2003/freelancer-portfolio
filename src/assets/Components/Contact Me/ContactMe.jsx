function ContactMe() {
    return <>
    <div className="container p-5">
        <div className="d-flex flex-column align-items-center gap-3 p-5">
            <h2 className="section-title text__secondary text-uppercase fw-bold">Contact Me</h2>
            <div className="col-8">
                <form>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control border-0 border-bottom shadow-none rounded-0" name="fullname" id="full-name" placeholder=""/>
                        <label htmlFor="full-name" className="form-label">Full name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control border-0 border-bottom shadow-none rounded-0" name="email" id="email-address" placeholder=""/>
                        <label htmlFor="email-address" className="form-label">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control border-0 border-bottom shadow-none rounded-0" name="phone" id="phone-number" placeholder=""/>
                        <label htmlFor="phone-number" className="form-label">Phone Number</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control border-0 border-bottom shadow-none rounded-0" name="message" id="message" placeholder=""/>
                        <label htmlFor="message" className="form-label">Message</label>
                    </div>
                    <button type="submit" className="btn bg__primary text-light fw-bold fs-5 px-4 py-3">Send</button>
                </form>
            </div>
        </div>
    </div>
    </>
}

export default ContactMe