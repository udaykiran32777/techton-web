import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = ({ scrollY }) => {
    const [activeSection, setActiveSection] = useState('home')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'solutions', label: 'Solutions' },
        { id: 'services', label: 'Services' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'about', label: 'About' },
        { id: 'contact', label: 'Contact' }
    ]

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => link.id)
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <nav className={`glass-nav ${scrollY > 50 ? 'scrolled' : ''}`}>
            <div className="nav-content">
                <div className="nav-logo">
                    <div className="logo-glow"></div>
                    <span className="logo-text">TECHTON</span>
                </div>

                {/* Desktop Navigation */}
                <ul className="nav-links desktop-nav">
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <button
                                onClick={() => scrollToSection(link.id)}
                                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className={`mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Mobile Navigation Overlay */}
                <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="mobile-nav-links">
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <button
                                    onClick={() => {
                                        scrollToSection(link.id)
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
