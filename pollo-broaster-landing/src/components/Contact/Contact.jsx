import React, { useState } from 'react'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import Button from '../shared/Button'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
  }

  return (
    <section id="contacto" className="contact section">
      <div className="container">
        <div className="contact__header">
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-subtitle">Estamos aquí para servirte</p>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <h3>Información de Contacto</h3>
            
            <div className="contact__item">
              <Phone className="contact__icon" />
              <div>
                <h4>Teléfono</h4>
                <span>+51 987 654 321</span>
              </div>
            </div>
            
            <div className="contact__item">
              <MapPin className="contact__icon" />
              <div>
                <h4>Dirección</h4>
                <span>Av. Siempre Viva 123, Lima</span>
              </div>
            </div>
            
            <div className="contact__item">
              <Clock className="contact__icon" />
              <div>
                <h4>Horario de Atención</h4>
                <span>Lunes a Domingo: 10:00 AM - 11:00 PM</span>
              </div>
            </div>
            
            <div className="contact__item">
              <Mail className="contact__icon" />
              <div>
                <h4>Email</h4>
                <span>info@polloseldorado.com</span>
              </div>
            </div>

            <div className="contact__social">
              <h4>Síguenos en:</h4>
              <div className="social__links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="WhatsApp">💬</a>
              </div>
            </div>
          </div>

          <div className="contact__form">
            <h3>Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="form__group">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div className="form__group">
                <input
                  type="tel"
                  placeholder="Tu teléfono"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              
              <div className="form__group">
                <textarea
                  placeholder="Tu mensaje"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              
              <Button type="submit" variant="primary">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact