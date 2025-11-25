import { useEffect, useRef } from 'react'
import './Solutions.css'

const Solutions = () => {
    const solutionsRef = useRef(null)

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

        const cards = solutionsRef.current?.querySelectorAll('.solution-card')
        cards?.forEach(card => observer.observe(card))

        return () => {
            cards?.forEach(card => observer.unobserve(card))
        }
    }, [])

    const solutions = [
        {
            title: 'Techton SchoolDesk',
            description: 'Comprehensive school information & notice board management system with real-time updates and parent-teacher connectivity.',
            features: ['Digital Notice Board', 'Parent Portal', 'Analytics'],
            gradient: 'gradient1'
        },
        {
            title: 'Techton StudioAlbum',
            description: 'Professional digital photo album system for studios with AI-powered organization and cloud delivery.',
            features: ['Cloud Storage', 'AI Organization', 'Client Portal'],
            gradient: 'gradient2'
        },
        {
            title: 'Techton EstatePro',
            description: 'Complete real estate management platform with property listings, CRM, and virtual tours.',
            features: ['Property Management', 'CRM', 'Virtual Tours'],
            gradient: 'gradient3'
        },
        {
            title: 'Techton InventoryLite',
            description: 'Streamlined stock and warehouse management with real-time tracking and automated alerts.',
            features: ['Stock Tracking', 'Alerts', 'Reports'],
            gradient: 'gradient4'
        }
    ]

    const getIcon = (index) => {
        const icons = [
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" key="icon1">
                <rect x="5" y="8" width="30" height="24" rx="3" stroke="url(#gradient1)" strokeWidth="2" />
                <path d="M5 14H35" stroke="url(#gradient1)" strokeWidth="2" />
                <circle cx="10" cy="11" r="1" fill="#1F5EFF" />
                <circle cx="14" cy="11" r="1" fill="#7C3AED" />
                <defs>
                    <linearGradient id="gradient1" x1="5" y1="8" x2="35" y2="32">
                        <stop offset="0%" stopColor="#1F5EFF" />
                        <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                </defs>
            </svg>,
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" key="icon2">
                <rect x="8" y="6" width="24" height="28" rx="2" stroke="url(#gradient2)" strokeWidth="2" />
                <rect x="12" y="10" width="16" height="12" rx="1" fill="url(#gradient2)" opacity="0.3" />
                <line x1="12" y1="26" x2="20" y2="26" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="30" x2="24" y2="30" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" />
                <defs>
                    <linearGradient id="gradient2" x1="8" y1="6" x2="32" y2="34">
                        <stop offset="0%" stopColor="#22D3EE" />
                        <stop offset="100%" stopColor="#1F5EFF" />
                    </linearGradient>
                </defs>
            </svg>,
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" key="icon3">
                <path d="M20 8L28 14V26L20 32L12 26V14L20 8Z" stroke="url(#gradient3)" strokeWidth="2" />
                <path d="M20 8V20M20 20L28 26M20 20L12 26" stroke="url(#gradient3)" strokeWidth="2" />
                <defs>
                    <linearGradient id="gradient3" x1="12" y1="8" x2="28" y2="32">
                        <stop offset="0%" stopColor="#7C3AED" />
                        <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                </defs>
            </svg>,
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" key="icon4">
                <rect x="6" y="10" width="28" height="20" rx="2" stroke="url(#gradient4)" strokeWidth="2" />
                <path d="M13 18H20M13 22H27" stroke="url(#gradient4)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="25" cy="18" r="2" fill="#1F5EFF" />
                <defs>
                    <linearGradient id="gradient4" x1="6" y1="10" x2="34" y2="30">
                        <stop offset="0%" stopColor="#1F5EFF" />
                        <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                </defs>
            </svg>
        ]
        return icons[index]
    }

    return (
        <section id="solutions" className="solutions-section section-padding">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        <span>Our Solutions</span>
                    </div>
                    <h2 className="section-title">Premium Products<br />For Modern Businesses</h2>
                    <p className="section-subtitle">Tailored solutions designed to elevate your operations</p>
                </div>

                <div className="solutions-grid" ref={solutionsRef}>
                    {solutions.map((solution, index) => (
                        <div className="solution-card" key={index}>
                            <div className="card-glow"></div>
                            <div className="solution-icon">
                                {getIcon(index)}
                            </div>
                            <h3 className="solution-title">{solution.title}</h3>
                            <p className="solution-description">{solution.description}</p>
                            <div className="solution-features">
                                {solution.features.map((feature, idx) => (
                                    <span className="feature-tag" key={idx}>{feature}</span>
                                ))}
                            </div>
                            <a href="#" className="solution-link">
                                Learn More
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Solutions
