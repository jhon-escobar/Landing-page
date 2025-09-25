import React from 'react'
import { clsx } from 'clsx'
import './Button.css'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false,
  type = 'button',
  icon: Icon,
  ...props 
}) => {
  const className = clsx(
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    { 'btn--icon': Icon }
  )

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {Icon && <Icon className="btn__icon" />}
      {children}
    </button>
  )
}

export default Button