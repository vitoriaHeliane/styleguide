import React from 'react'
import PropTypes from 'prop-types'
import Link from 'vtex.render-runtime/components/Link'

export default function NavItem ({href, name}) {
  return (
    <li>
      <Link
        className={`db pv2 ph3 ph4-l link acumin lh-copy hover-bg-light-silver ${href ? 'black' : 'silver'}`}
        to={href}
      >
        <span className="ph3">{name}</span>
      </Link>
    </li>
  )
}

NavItem.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
}
