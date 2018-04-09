import React from 'react'
import Link from 'gatsby-link'
import SideBar from '../components/Sidebar'
import IndexPage from '../components/Index'



const App = () => (
  <div>
    <div style={{
      float: 'left',
      width: '220px',
      paddingRight: '10px'
    }}>
      <SideBar />
    </div>
    <div style={{
      float: 'left',
      width: '740px'
    }}>
    <IndexPage />
    </div>
  </div>
)
export default App
