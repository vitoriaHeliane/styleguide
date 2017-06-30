import React from 'react'
import PropTypes from 'prop-types'
import Link from 'vtex.render-runtime/components/Link'
import className from 'classnames'

import NavList from './NavList'

export default function NavSection ({current, href, name, children}) {
  const activeClasses = className(
    'db pv2 ph3 ph4-l lh-copy f5 fw4',
    {
      'link hover-bg-light-silver': href,
      'blue': current,
      'black': !current,
    }
  )

  return (
    <div>
      <h4 className="ma0">
        {
          href
          ? (
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
