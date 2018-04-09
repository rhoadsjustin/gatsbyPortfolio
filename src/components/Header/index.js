import React from 'react'
import Link from 'gatsby-link'
import backgroundHeader from '../../backgroundHeader.png'

const Header = () => (
  <div
    style={{
      background: '#484848',
      backgroundSize: '200px',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Justin Rhoads
        </Link>
      </h1>
      <h2 style={{
          color: 'white'
      }}>Full Stack Web and Mobile Developer</h2>
    <div  
      style={{
        float: 'right'
      }}>
      <p style={{
        color: 'white'
      }}>Email: rhoadsjustin@gmail.com</p>
    </div>
    </div>
  </div>
)

export default Header
