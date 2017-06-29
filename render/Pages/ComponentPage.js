import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {arduinoLight} from 'react-syntax-highlighter/dist/styles'
import {Table} from 'onda'
import * as previews from 'onda/previews'

import Template from '../Template'

export default function ComponentPage ({params: {element, component}}) {
  const preview = element ? previews[element.toLowerCase()] : previews[component.toLowerCase()]
  const {name, description, Component, exampleCode, props} = preview
  return (
    <Template>
      <div className="black-80">
        <h1 className="f1">{name}</h1>
        <span className="f3">{description}</span>
        <div className="f4 fw6 mv4 pt4 bt b--black-10">Examples</div>
      </div>
      <div className="w-100 ba pa4 mb4 b--black-10 br2">
        <Component />
      </div>
      <div>
        <SyntaxHighlighter
          language="html"
          style={arduinoLight}
          customStyle={{
            background: '#eef3f9',
            borderRadius: '.25rem',
            fontSize: '14px',
            lineHeight: '190%',
            padding: '1rem',
            border: '1px solid #eef3f9',
            width: '100%',
          }}
        >
          {exampleCode}
        </SyntaxHighlighter>
      </div>
      <div>
        <div className="f4 fw6 mv4">Prop List</div>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Cell>Prop</Table.Cell>
              <Table.Cell>Type</Table.Cell>
              <Table.Cell>Description</Table.Cell>
              <Table.Cell>Values</Table.Cell>
              {
                component
                ? <Table.Cell>Element</Table.Cell>
                : null
              }
              <Table.Cell>Required</Table.Cell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              props.map(prop => {
                const {name, description, required, type, element, values} = prop
                const propertiesList = [name, type, description, values, element, required].filter(prop => prop)
                return (
                  <Table.Row>
                    {
                      propertiesList
                      .map(property => {
                        return (
                          <Table.Cell key={property}>
                            {
                              typeof(property) === 'boolean'
                              ? property ? 'Yes' : 'No'
                              : Array.isArray(property) ? property.join(', ') : property
                            }
                          </Table.Cell>
                        )
                      })
                    }
                  </Table.Row>
                )
              })
            }
          </Table.Body>
        </Table>
      </div>
    </Template>
  )
}

ComponentPage.propTypes = {
  params: PropTypes.object,
}
