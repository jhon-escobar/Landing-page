import React from 'react'
import { Users, Award, Heart } from 'lucide-react'
import './About.css'

const About = () => {
  return (
    <section id="nosotros" className="about section">
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <h2 className="section-title">Nuestra Historia</h2>
            <p className="about__description">
              Desde 1998, Pollos Broaster El Dorado ha sido el lugar favorito 
              de las familias limeñas para disfrutar del mejor pollo broaster. 
              Nuestra receta secreta, pasada de generación en generación, 
              garantiza ese sabor único que nos caracteriza.
            </p>
            
            <div className="about__stats">
              <div className="stat">
                <Users className="stat__icon" />
                <div>
                  <h3>50,000+</h3>
                  <span>Clientes Satisfechos</span>
                </div>
              </div>
              <div className="stat">
                <Award className="stat__icon" />
                <div>
                  <h3>25+</h3>
                  <span>Años de Experiencia</span>
                </div>
              </div>
              <div className="stat">
                <Heart className="stat__icon" />
                <div>
                  <h3>100%</h3>
                  <span>Ingredientes Frescos</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about__image">
            <img src="/images/pollo-broaster-3.jpg" alt="Nuestro local" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About