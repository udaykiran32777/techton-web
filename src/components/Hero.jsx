import { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
    const heroRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (heroRef.current) {
            observer.observe(heroRef.current)
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current)
            }
        }
    }, [])

    const scrollToSolutions = () => {
        document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToPortfolio = () => {
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="home" className="hero-section">
            <div className="hero-content" ref={heroRef}>
                <div className="hero-glass-card">
                    <div className="glow-orb glow-orb-1"></div>
                    <div className="glow-orb glow-orb-2"></div>

                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        <span>Strong Digital Foundations</span>
                    </div>

                    <h1 className="hero-title">
                        Cutting-Edge Technology !<br />
                        <span className="gradient-text">Effortless Experience !</span>
                    </h1>

                    <p className="hero-subtitle">
                        Simple, powerful digital solutions crafted to streamline your business.

                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary glass-btn" onClick={scrollToSolutions}>
                            <span>Explore Solutions</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="btn-secondary glass-btn" onClick={scrollToPortfolio}>
                            <span>View Our Work</span>
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-value">50+</div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-value">99%</div>
                            <div className="stat-label">Client Satisfaction</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-value">5+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-line"></div>
                <span>Scroll to explore</span>
            </div>
        </section>
    )
}

export default Hero
