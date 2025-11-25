import './About.css'

const About = () => {
    return (
        <section id="about" className="about-section section-padding">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <div className="section-badge">
                            <span className="badge-dot"></span>
                            <span>About Us</span>
                        </div>
                        <h2 className="section-title">Building Tomorrow's<br />Technology Today</h2>
                        <p className="about-text">
                            Founded with a vision to empower businesses through technology, TECHTON has grown into a trusted partner for organizations seeking digital transformation.
                        </p>
                        <p className="about-text">
                            We believe in creating strong digital foundations that stand the test of time. Every line of code, every design decision, and every feature is built with precision, clarity, and purpose.
                        </p>

                        <div className="about-values">
                            <div className="value-item">
                                <div className="value-icon">💎</div>
                                <div className="value-content">
                                    <h4>Quality First</h4>
                                    <p>Excellence in every pixel and line of code</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <div className="value-icon">🚀</div>
                                <div className="value-content">
                                    <h4>Innovation Driven</h4>
                                    <p>Pushing boundaries with cutting-edge solutions</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <div className="value-icon">🤝</div>
                                <div className="value-content">
                                    <h4>Client Focused</h4>
                                    <p>Your success is our mission</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-visual">
                        <div className="team-showcase">
                            <div className="team-member">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300" alt="Founder" />
                                <div className="member-badge">Founder</div>
                            </div>
                            <div className="team-member">
                                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300" alt="Lead Developer" />
                                <div className="member-badge">Lead Dev</div>
                            </div>
                            <div className="team-member">
                                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300" alt="Designer" />
                                <div className="member-badge">Designer</div>
                            </div>
                            <div className="team-stats-glass">
                                <div className="stat">
                                    <span className="stat-number">5+</span>
                                    <span className="stat-label">Years</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
