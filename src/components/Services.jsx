import { useEffect, useRef } from 'react'
import './Services.css'

const Services = () => {
    const servicesRef = useRef(null)

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

        const cards = servicesRef.current?.querySelectorAll('.service-card')
        cards?.forEach(card => observer.observe(card))

        return () => {
            cards?.forEach(card => observer.unobserve(card))
        }
    }, [])

    const services = [
        {
            icon: '⚡',
            title: 'Web App Development',
            description: 'Lightning-fast, responsive web applications built with modern frameworks and best practices.'
        },
        {
            icon: '📱',
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.'
        },
        {
            icon: '🚀',
            title: 'Digital Marketing',
            description: 'Strategic online presence and growth marketing to help your brand reach the right audience.'
        },
        {
            icon: '🎨',
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive interfaces that users love, backed by research and data.'
        },
        {
            icon: '📊',
            title: 'Admin Dashboards',
            description: 'Powerful control panels with real-time analytics and intuitive data visualization.'
        },
        {
            icon: '🔧',
            title: 'Custom Solutions',
            description: 'Tailored technology solutions designed specifically for your unique business needs.'
        },
        {
            icon: '☁️',
            title: 'SaaS Platform Development',
            description: 'Scalable cloud-based platforms designed for growth and reliability.'
        },

    ]

    return (
        <section id="services" className="services-section section-padding">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        <span>Services</span>
                    </div>
                    <h2 className="section-title">What We Do Best</h2>
                    <p className="section-subtitle">Comprehensive digital solutions to transform your business</p>
                </div>

                <div className="services-grid" ref={servicesRef}>
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon-wrapper">
                                <div className="service-icon-glow"></div>
                                <div className="service-icon">{service.icon}</div>
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
