import React from 'react';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="d-flex justify-content-center">Contact Us</h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content align-items-center offset-2">
                <div className="col-sm-6">
                    <h5>Our Address</h5>
                    <address>
                        1234 Street Road<br />
                        Albuquerque, NM 12345<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+15053215940"><i className="fa fa-phone" /> 1-505-321-5940</a><br />
                    <a role="button" className="btn btn-link" href="mailto:hbaysinger09@gmail.com"><i className="fa fa-envelope-o" /> hbaysinger09@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;