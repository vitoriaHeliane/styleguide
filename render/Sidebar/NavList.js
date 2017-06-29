import React from 'react'
import Icon from 'vtex.icon'
import PropTypes from 'prop-types'

export default function NavList ({children}) {
  return (
    <div>
      <ul className="ma0 pa0 list f5 fw1">
        {children}
      </ul>
    </div>
  )
}

NavList.propTypes = {
  children: PropTypes.node,
}
