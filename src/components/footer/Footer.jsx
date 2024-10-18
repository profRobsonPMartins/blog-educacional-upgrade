import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-section logo-section">
                    <h2>EducaTec 3ºB</h2>
                    <p>
                        Schools play a crucial role in shaping the minds and futures of students. They
                        provide a strutured anvironment where students can learn and grow, both academically and socially.
                    </p>
                    <div className="footer-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                    </div>
                </div>

                <div className="footer-section courses-section">
                    <h3>Courses</h3>
                    <ul>
                        <li>Science</li>
                        <li>Arts</li>
                        <li>Music</li>
                        <li>General Ed.</li>
                        <li>Spoken Eng</li>
                    </ul>
                </div>

                <div className="footer-section links-section">
                     <h3>Links</h3>
                     <ul>
                        <li>About</li>
                        <li>Gallery</li>
                        <li>Staff</li>
                        <li>Events</li>
                        <li>FAQs</li>
                     </ul>
                </div>

                <div className="footer-section contact-section">
                    <h3>Contact</h3>
                    <ul>
                        <li><i></i>+1 234 567 8910</li>
                        <li><i></i> example@info.com</li>
                        <li><i></i> 70 Avenue Street, Brooklyn, NY, USA</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 ALL Rights Reserved by Educators</p>
            </div>
        </footer>
    )
}

export default Footer;