import React from 'react'
import './styles.scss'

const Button = ({ children, onClick, fill }) => {
  let styles = ['Button']
  styles = fill ? [...styles, 'Button--fill'] : [...styles, 'Button--hollow']

  return <button className={styles.join(' ')} onClick={onClick}>{children}</button>
}

export default Button