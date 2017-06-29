import React from 'react'
import Link from 'vtex.render-runtime/components/Link'
import * as components from 'onda/components'
import * as elements from 'onda/elements'

import NavSection from './NavSection.js'
import NavItem from './NavItem.js'
import logoSVG from '../assets/svg/logo.svg'

function isCurrent(regex) {
  return window && window.location ? regex.test(window.location.pathname) : false
}

function generateComponentsSections(components, type) {
  const sectionHref = `/${type.toLowerCase()}`
  const regex = new RegExp(`^${sectionHref}`)
  return (
    <NavSection
      current={isCurrent(regex)}
      name={type}
      key={type}
    >
      {
        Object.keys(components)
        .filter(key => key !== '__esModule')
        .map(key => {
          const href = `${sectionHref}/${key}`
          return (
            <NavItem
              key={href}
              href={href}
              name={key}
            />
          )
        })
      }
    </NavSection>
  )
}

//eslint-disable-next-line
export default function Sidebar() {
  return (
    <aside className="fl w-20 h-100-ns">
      <nav>
        <div className="dn db-ns w-20 h-100-ns fixed overflow-y-scroll b--light-silver br">
          <Link className="db pa4 pb0" to="/">
            <img src={logoSVG} alt="VTEX" />
          </Link>
          <div className="pv3 pv4-l">
            <NavSection
              current={isCurrent(/^\/(howto)/)}
              name="How-to"
            >
              <NavItem
                href="/howto/install"
                name="Install"
              />
            </NavSection>
            {generateComponentsSections(components, 'Components')}
            {generateComponentsSections(elements, 'Elements')}
          </div>
        </div>
      </nav>
    </aside>
  )
}
