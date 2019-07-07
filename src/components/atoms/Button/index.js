import React from 'react'
import './styles.scss'

const Button = ({ children, onClick, fill, link, disabled, target }) => {
  let styles = ['Button']
  styles = disabled ? [...styles, 'Button--disabled'] : [...styles]
  styles = fill ? [...styles, 'Button--fill', disabled && 'Button--disabled--fill'] : [...styles, 'Button--hollow']
  
  if (link) {
    return (
      <a href={link} target={target} rel="nofollow noopener noreferrer">
        <button className={styles.join(' ')} onClick={onClick}>
          {children}
        </button>
      </a>
    )
  }

  return <button className={styles.join(' ')} onClick={onClick}>{children}</button>
}

Button.defaultProps = {
  target: '_blank'
}

export default Button