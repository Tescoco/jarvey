import React from 'react'
import PropTypes from 'prop-types';
Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool,
}

export default function Container({children, className='', fluid=false}) {
  return (
    <div className={`mx-auto px-4 ${fluid?'w-full':'container'} ${className}`} >
        {children}
    </div>
  )
}
