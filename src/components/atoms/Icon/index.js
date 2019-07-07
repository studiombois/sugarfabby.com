import React from 'react'

const Icon = ({ icon, link, ...props }) => {
  const src = require(`./icons/icon-${icon}.svg`)
  if (link) {
    return (
      <a href={link} target="_blank" rel="nofollow noopener noreferrer">
        <img src={src} {...props} alt={`icon-${icon}`} />
      </a>
    )
  }
  return <img src={src} {...props} alt={`icon-${icon}`} />
}

export default Icon