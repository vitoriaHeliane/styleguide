import React from 'react'
import Template from '../Template'
import CodeEmbed from '../components/CodeEmbed'

export default function GettingStarted () {
  const textStyle = 'f4 lh-copy mw8 black-70'
  return (
    <Template>
      <section className="pr4">
        <h1 className="f1 black-70 pb4">How to use</h1>
        <p className={textStyle}>Install the necessary packages:</p>
        <CodeEmbed language="javascript">
            npm i --save vtex-tachyons onda
        </CodeEmbed>

        <p className={textStyle}>Inside your app root import the tachyons:</p>
        <CodeEmbed language="javascript">
          {'import \'tachyons\' \nimport \'vtex-tachyons\''}
        </CodeEmbed>

        <p className={textStyle}>And now you can import the components and elements directly from the onda package:</p>
        <CodeEmbed language="javascript">
          {'import { Button, Card, Heading, List } from \'onda\''}
        </CodeEmbed>
      </section>
    </Template>
  )
}
