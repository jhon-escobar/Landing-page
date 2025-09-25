import React, { useState } from 'react'
import { menuItems, categories } from '../../data/menuItems'
import ProductCard from '../shared/ProductCard'
import Button from '../shared/Button'
import './Menu.css'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [cart, setCart] = useState([])

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product])
    // Aquí podrías agregar una notificación toast
    console.log('Producto agregado:', product.name)
  }

  return (
    <section id="menu" className="menu section bg-light">
      <div className="container">
        <div className="menu__header">
          <h2 className="section-title">Nuestro Menú Delicioso</h2>
          <p className="section-subtitle">
            Descubre nuestra variedad de pollos broaster y acompañamientos
          </p>
        </div>

        <div className="menu__filters">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'primary' : 'outline'}
              size="small"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="menu__grid">
          {filteredItems.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <div className="menu__cta">
          <Button variant="primary" size="large">
            Descargar Menú Completo (PDF)
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Menu