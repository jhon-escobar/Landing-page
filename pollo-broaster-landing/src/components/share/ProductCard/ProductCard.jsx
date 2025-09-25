import React from 'react'
import Button from '../Button'
import './ProductCard.css'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      {product.popular && <span className="product-card__badge">🔥 Popular</span>}
      <div className="product-card__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">S/ {product.price.toFixed(2)}</span>
          <Button 
            variant="primary" 
            size="small"
            onClick={() => onAddToCart(product)}
          >
            Ordenar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard