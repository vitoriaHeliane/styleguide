import React from 'react'
import PropTypes from 'prop-types'
import Link from 'vtex.render-runtime/components/Link'
import classNames from 'classnames'

export default function NavItem ({href, name}) {
  const style = classNames(
    'db pv2 ph3 ph4-l link acumin lh-copy hover-bg-light-silver',
    {
      black: href,
      silver: !href,
    }
  )

  return (
    <li>
      <Link
        className={style}
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
