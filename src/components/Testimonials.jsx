import { useState, useEffect } from 'react'
import './Testimonials.css'

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const testimonials = [
        {
            text: "SunHapIT transformed our school management system completely. The SchoolDesk platform is intuitive, powerful, and has improved our parent-teacher communication tremendously.",
            author: "Sarah Johnson",
            title: "Principal, Greenwood Academy",
            avatar: "avatar_woman_1764065466386.png"
        },
        {
            text: "The StudioAlbum system has revolutionized how we deliver photos to clients. The cloud integration and AI organization save us hours every week.",
            author: "Michael Chen",
            title: "Owner, Lens & Light Studio",
            avatar: "avatar_man_1764065482530.png"
        },
        {
            text: "Outstanding work on our real estate platform. The attention to detail and user experience is exceptional. Our listings have never looked better.",
            author: "Emily Rodriguez",
            title: "CEO, Metro Properties",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200"
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="testimonials-section section-padding">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">
                        <span className="badge-dot"></span>
                        <span>Testimonials</span>
                    </div>
                    <h2 className="section-title">What Our Clients Say</h2>
                </div>

                <div className="testimonials-carousel">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                        >
                            <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    <img
                                        src={testimonial.avatar.startsWith('http') ? testimonial.avatar : `/assets/${testimonial.avatar}`}
                                        alt={testimonial.author}
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200'
                                        }}
                                    />
                                </div>
                                <div className="author-info">
                                    <div className="author-name">{testimonial.author}</div>
                                    <div className="author-title">{testimonial.title}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="carousel-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
