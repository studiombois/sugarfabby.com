import React from 'react'
import './styles.scss'

const Layout = ({ children, className, innerClassName }) => (
  <section className={className ? `Layout ${className}` : 'Layout'}>
    <div className={innerClassName ? `Layout__Wrapper ${innerClassName}` : 'Layout__Wrapper'}>
      {children}
    </div>
  </section>
)

Layout.defaultProps = {
  className: '',
  innerClassName: '',
}

export default Layout