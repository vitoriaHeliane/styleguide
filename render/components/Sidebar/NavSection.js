import React from 'react'
import PropTypes from 'prop-types'
import Link from 'vtex.render-runtime/components/Link'
import NavList from './NavList'

export default function NavSection ({current, href, name, children}) {
  const activeClasses = `db pv2 ph3 ph4-l ${href ? 'link hover-bg-light-silver' : ''} lh-copy f5 fw4 ${current ? 'blue' : 'black'}`

  return (
    <div>
      <h4 className="ma0">
        {
          href ?
          (
            <Link
              className={activeClasses}
              to={href}
            >
              {name}
            </Link>
          )
          : (
            <span
              className={activeClasses}
            >
              {name}
            </span>
          )
        }
      </h4>
      {
        children
        ? (
          <NavList>
            {children}
          </NavList>
        )
        : null
      }
    </div>
  )
}


NavSection.propTypes = {
  current: PropTypes.bool,
  href: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
}
