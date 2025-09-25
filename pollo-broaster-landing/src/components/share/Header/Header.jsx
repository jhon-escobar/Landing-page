import React, { useState, useEffect } from 'react'
import { Phone, MapPin, ShoppingCart } from 'lucide-react'
import Button from '../shared/Button'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__top">
        <div className="container">
          <div className="header__info">
            <div className="header__contact">
              <Phone size={16} />
              <span>+51 987 654 321</span>
            </div>
            <div className="header__location">
              <MapPin size={16} />
              <span>Av. Siempre Viva 123, Lima</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="header__nav">
        <div className="container">
          <div className="nav__content">
            <div className="nav__brand">
              <h2>🍗 Pollos El Dorado</h2>
            </div>
            
            <div className={`nav__menu ${isMenuOpen ? 'nav__menu--open' : ''}`}>
              <a href="#inicio">Inicio</a>
              <a href="#menu">Menú</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#contacto">Contacto</a>
            </div>
            
            <div className="nav__actions">
              <Button variant="outline" icon={ShoppingCart}>
                Carrito (0)
              </Button>
              <Button variant="primary">
                Ordenar Ahora
              </Button>
            </div>
            
            <button 
              className="nav__toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header