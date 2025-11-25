import { useEffect, useRef } from 'react'
import './ParticlesBackground.css'

const ParticlesBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationFrameId
        let particles = []

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 2 + 0.5
                this.speedX = Math.random() * 0.5 - 0.25
                this.speedY = Math.random() * 0.5 - 0.25
                this.opacity = Math.random() * 0.5 + 0.2
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY

                if (this.x > canvas.width) this.x = 0
                if (this.x < 0) this.x = canvas.width
                if (this.y > canvas.height) this.y = 0
                if (this.y < 0) this.y = canvas.height
            }

            draw() {
                ctx.fillStyle = `rgba(34, 211, 238, ${this.opacity})`
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const init = () => {
            particles = []
            const numberOfParticles = Math.min((canvas.width * canvas.height) / 15000, 100)
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle())
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach(particle => {
                particle.update()
                particle.draw()
            })

            // Draw connections
            particles.forEach((particleA, indexA) => {
                particles.slice(indexA + 1).forEach(particleB => {
                    const dx = particleA.x - particleB.x
                    const dy = particleA.y - particleB.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 150) {
                        ctx.strokeStyle = `rgba(34, 211, 238, ${0.15 * (1 - distance / 150)})`
                        ctx.lineWidth = 0.5
                        ctx.beginPath()
                        ctx.moveTo(particleA.x, particleA.y)
                        ctx.lineTo(particleB.x, particleB.y)
                        ctx.stroke()
                    }
                })
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        init()
        animate()

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [])

    return (
        <div className="background-container">
            <div className="gradient-bg"></div>
            <div className="grid-overlay"></div>
            <canvas ref={canvasRef} id="particles-canvas"></canvas>
        </div>
    )
}

export default ParticlesBackground
