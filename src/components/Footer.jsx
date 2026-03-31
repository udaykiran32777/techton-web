import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="logo-glow-footer"></div>
                            <span className="logo-text">SunHapIT</span>
                        </div>
                        <p className="footer-tagline">We Simplify Your Business with Technology</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Solutions</h4>
                            <a href="#">SchoolDesk</a>
                            <a href="#">StudioAlbum</a>
                            <a href="#">EstatePro</a>
                            <a href="#">InventoryLite</a>
                        </div>

                        <div className="footer-column">
                            <h4>Services</h4>
                            <a href="#">Web Development</a>
                            <a href="#">Mobile Apps</a>
                            <a href="#">SaaS Platforms</a>
                            <a href="#">UI/UX Design</a>
                        </div>

                        <div className="footer-column">
                            <h4>Company</h4>
                            <a href="#about">About Us</a>
                            <a href="#portfolio">Portfolio</a>
                            <a href="#contact">Contact</a>
                            <a href="#">Careers</a>
                        </div>

                        <div className="footer-column">
                            <h4>Connect</h4>
                            <a href="#">LinkedIn</a>
                            <a href="#">Twitter</a>
                            <a href="#">GitHub</a>
                            <a href="#">Dribbble</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 SunHapIT. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <span className="separator">•</span>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
