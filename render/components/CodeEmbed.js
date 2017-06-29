import Component from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { arduinoLight } from 'react-syntax-highlighter/dist/styles'

export default function CodeEmbed({children, language}) {
  return (
    <SyntaxHighlighter
      language={language}
      style={arduinoLight}
      customStyle={{
        background: '#eef3f9',
        borderRadius: '.25rem',
        fontSize: '1rem',
        lineHeight: '190%',
        padding: '1rem',
        border: '1px solid #eef3f9',
        width: '100%',
      }}
    >
      {children}
    </SyntaxHighlighter>
  )
}

CodeEmbed.propTypes = {
  children: PropTypes.any.isRequired,
}
