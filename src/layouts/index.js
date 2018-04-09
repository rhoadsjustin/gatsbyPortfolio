import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import backgroundHeader from '../backgroundHeader.png'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Justin Rhoads - Web Developer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1020,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        display: 'inline-block'
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
