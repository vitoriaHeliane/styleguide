import React, { Component } from 'react'
import solidSVG from '../assets/svg/solid.svg'
import globalSVG from '../assets/svg/global.svg'
import trustSVG from '../assets/svg/trust.svg'
import directSVG from '../assets/svg/direct.svg'
import boldSVG from '../assets/svg/bold.svg'
import Template from '../Template'

const principles = [
  {
    title: 'Solid',
    mantras: ['Think modular', 'Be extensible', 'Build scalable'],
    description: 'Create without limitations, always thinking about scalable products that grow with the ecosystem.'
  },
  {
    title: 'Global',
    mantras: ['We believe in diversity', 'Global means local'],
    description: 'Wherever you are, always think of the local context. This means knowing our users, speaking their language and being relevant to their culture.'
  },
  {
    title: 'Trustworthy',
    mantras: ['Get people\'s confidence'],
    description: 'People should feel safe using our interfaces. We are all in this together, thinking and doing our best for the ecosystem.'
  },
  {
    title: 'Direct',
    mantras: ['We help people to solve problems'],
    description: 'Focus on what it takes for the user to complete his or her work. We want people to complete their activities with minimal effort and maximum efficiency.'
  },
  {
    title: 'Audacious',
    mantras: ['Experimentation without fear'],
    description: 'There will always be risks - just remember that you are always the owner of the result. It\'s better to apologize than to ask for permission.'
  }
]

export default function Principles() {
  const titleStyle = "f1 dib black-70 lh-copy-ns ma0"
  return (
    <Template>
      <div>
        <div className="mb5">
          <h1 className={`${titleStyle} br-ns bb-0-ns bb b--black-70 bw3-ns bw3 pr4-ns pb3 pb0-ns mr4-ns`}>
            Design
            <br />
            principles
          </h1>
          <h1 className={`${titleStyle} mt3 mt0-ns fw2`}>
            How we do it
            <br />
            and why
          </h1>
        </div>
        <section>
        {
          principles.map(({title, mantras, description}) => (
            <div className="mb4 mb5-ns">
              <h2 className="f1 ma0 mb3 mb4-ns black-70">{title}</h2>
              <div className="mb4">
                {
                  mantras.map(mantra => (
                    <h4
                      className="gray f3 fw5 ma0 mb2 measure-narrow"
                      key={mantra}
                    >
                      {mantra}
                    </h4>
                  ))
                }
              </div>
              <h4 className="f3 fw4 black-80 ma0 lh-copy w-100 w-70-m w-50-l w-40-xl w-30-xxl">{description}</h4>
            </div>
          ))
        }
        </section>
      </div>
    </Template>
  )
}
