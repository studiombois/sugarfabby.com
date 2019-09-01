import React from 'react'

const Icon = ({ icon, link, ...props }) => {
  const src = require(`./icons/icon-${icon}.svg`)
  const iconStyle = {
    mask: `url(${src})`,
    maskSize: 'cover',
  }
  if (link) {
    return (
      <a href={link} target="_blank" rel="nofollow noopener noreferrer">
        <span style={iconStyle} {...props} />
      </a>
    )
  }
  return <span style={iconStyle} {...props} />
}

export default Icon