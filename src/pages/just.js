import * as React from 'react'
import Layout from '../components/layout'

const JustPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>Abouts Me</title>

export default JustPage