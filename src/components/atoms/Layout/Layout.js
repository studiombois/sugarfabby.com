import React from 'react';
import './styles.scss';

const Layout = ({ children, className, innerClassName, ...props }) => (
  <section className={className ? `Layout ${className}` : 'Layout'} {...props}>
    <div
      className={
        innerClassName ? `Layout__Wrapper ${innerClassName}` : 'Layout__Wrapper'
      }
    >
      {children}
    </div>
  </section>
);

Layout.defaultProps = {
  className: '',
  innerClassName: '',
};

export default Layout;
