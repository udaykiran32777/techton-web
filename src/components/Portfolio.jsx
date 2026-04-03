import { useEffect, useRef } from 'react'
import './Portfolio.css'

const Portfolio = () => {
    const portfolioRef = useRef(null)

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

        const cards = portfolioRef.current?.querySelectorAll('.portfolio-card')
        cards?.forEach(card => observer.observe(card))

        return () => {
            cards?.forEach(card => observer.unobserve(card))
        }
    }, [])

    const projects = [
        {
            title: 'Mee Buddy',
            description: 'Enterprise resource planning solution for renewable energy management.',
            tags: ['Web App', 'Enterprise'],
            image: 'sunpro_project_1764064666554.png',
            link: 'https://meebuddy.com/'
        },
        {
            title: 'Village Community Apps',
            description: 'Digital platforms connecting rural communities with essential services.',
            tags: ['Social', 'Community'],
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
            link: '#'
        },
        {
            title: 'AP Dandora News',
            description: 'News portal for Andhra Pradesh community.',
            tags: ['Social', 'Community'],
            image: 'ap_dandora_news_project_1764064744180.png',
            link: 'https://apdandoranews.com'
        }
    ]

    const handleViewProject = (link) => {
        if (link && link !== '#') {
            window.open(link, '_blank', 'noopener,noreferrer')
        }
    }

    return (
        <section id="portfolio" className="portfolio-section section-padding">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        <span>Portfolio</span>
                    </div>
                    <h2 className="section-title">Work That Defines Us</h2>
                    <p className="section-subtitle">Showcasing our finest digital craftsmanship</p>
                </div>

                <div className="portfolio-grid" ref={portfolioRef}>
                    {projects.map((project, index) => (
                        <div className="portfolio-card" key={index}>
                            <div className="portfolio-image">
                                <img
                                    src={project.image.startsWith('http') ? project.image : `/assets/${project.image}`}
                                    alt={project.title}
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'
                                    }}
                                />
                                <div className="portfolio-overlay">
                                    <button
                                        className="view-project-btn"
                                        onClick={() => handleViewProject(project.link)}
                                    >
                                        View Project
                                    </button>
                                </div>
                            </div>
                            <div className="portfolio-info">
                                <div className="portfolio-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span className="tag" key={idx}>{tag}</span>
                                    ))}
                                </div>
                                <h3 className="portfolio-title">{project.title}</h3>
                                <p className="portfolio-description">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
