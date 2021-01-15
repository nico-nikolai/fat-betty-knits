import React from "react";
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/our-story">Our Story</Link>
              </li>
              <li>
                <Link to="/store">Store</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 text-center offset-1">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/FatBettyKnits"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://etsy.com/"
            >
              <i className="fa fa-etsy" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-pinterest"
              href="https://www.pinterest.com/fatbettyknits/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-pinterest" />
            </a>
          </div>
          <div className="col-sm-4 text-center">
            <a role="button" className="btn btn-link" href="tel:+15555555555">
              <i className="fa fa-phone" /> (555)555-5555
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:hbaysinger09@gmail.com"
            >
              <i className="fa fa-envelope-o" /> hbaysinger09@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;