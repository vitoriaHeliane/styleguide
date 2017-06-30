import React, { Component } from 'react'
import Link from 'vtex.render-runtime/components/Link'
import * as components from 'onda/components'
import * as elements from 'onda/elements'

import NavSection from './NavSection.js'
import NavItem from './NavItem.js'
import logoSVG from '../../assets/svg/logo.svg'

function isCurrent (regex, isClientReady) {
  return isClientReady ? regex.test(window.location.pathname) : false
}

function generateComponentsSections (components, type, isClientReady) {
  const sectionHref = `/${type.toLowerCase()}`
  const regex = new RegExp(`^${sectionHref}`)
  return (
    <NavSection
      current={isCurrent(regex, isClientReady)}
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

class Sidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isClientReady: false,
    }
  }

  componentDidMount () {
    this.setState({
      isClientReady: true,
    })
  }

  render () {
    const {isClientReady} = this.state
    return (
      <aside className="fl w-20 h-100-ns">
        <nav>
          <div className="dn db-ns w-20 h-100-ns fixed overflow-y-scroll b--light-silver br">
            <Link className="db ph2 pt4 pb0" to="/">
              <img src={logoSVG} alt="VTEX" />
            </Link>
            <div className="pv3 pv4-l">
              <NavSection
                current={isCurrent(/^\/(howto)/, isClientReady)}
                name="How-to"
              >
                <NavItem
                  href="/howto/install"
                  name="Install"
                />
              </NavSection>
              {generateComponentsSections(components, 'Components', isClientReady)}
              {generateComponentsSections(elements, 'Elements', isClientReady)}
            </div>
          </div>
        </nav>
      </aside>
    )
  }
}

export default Sidebar
