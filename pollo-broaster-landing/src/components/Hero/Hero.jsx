import React from 'react'
import { Clock, Star, Truck } from 'lucide-react'
import Button from '../shared/Button'
import './Hero.css'

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero__background">
        <div className="hero__overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              El Mejor Pollo Broaster de 
              <span className="text-gold"> Lima</span>
            </h1>
            <p className="hero__description">
              Disfruta de nuestro pollo broaster, crocante por fuera y 
              jugoso por dentro. Preparado con nuestra receta secreta 
              y los mejores ingredientes.
            </p>
            
            <div className="hero__features">
              <div className="feature">
                <Clock className="feature__icon" />
                <span>15-20 min entrega</span>
              </div>
              <div className="feature">
                <Star className="feature__icon" />
                <span>4.9/5 (500+ reseñas)</span>
              </div>
              <div className="feature">
                <Truck className="feature__icon" />
                <span>Delivery gratis desde S/ 40</span>
              </div>
            </div>
            
            <div className="hero__actions">
              <Button variant="primary" size="large">
                Ver Menú Completo
              </Button>
              <Button variant="outline" size="large">
                Llamar Ahora
              </Button>
            </div>
          </div>
          
          <div className="hero__image">
            <img src="/images/hero-bg.jpg" alt="Pollo Broaster El Dorado" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero