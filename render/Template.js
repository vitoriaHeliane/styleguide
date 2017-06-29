import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Sidebar from './Sidebar'
import Helmet from "react-helmet";
import './theme.css'

export default function Template({children}) {
  return (
    <div className="font-body">
      <Helmet
        script={[
          {
            type: 'text/javascript',
            innerHTML: `
              window.onload = function () {
                var rdom = document.createElement('script')
                rdom.src = 'https://unpkg.com/react-dom@15.5.4/dist/react-dom-server.min.js'
                document.body.appendChild(rdom)
              }
            `
          }
        ]}
        link={[
            {rel: "stylesheet", href: "http://io.vtex.com.br/fonts/stylesheet.css"},
        ]}
      />
      <Sidebar />
      <main className="ph3 ph5-ns pt4 fl h-100 w-100 w-80-ns">
        {children}
      </main>
    </div>
  )
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
}
