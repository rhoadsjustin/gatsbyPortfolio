import React from 'react'
import Me from '../me.jpg'

const SideBar = () => (
    <div style={{
        background: '#eeab39',
        height: '100%',
        padding: '0 20px 0 20px'
    }}>
        <img src={Me} style={{
            borderRadius: '140px',
            padding: '10px 20px 10px 20px',
        }} />
        <h3>Professional Skills</h3>
        <p>JavaScript, jQuery
    CSS, Bootstrap, Materialize, Node, Express, MongoDB, React, React Native, Ionic, Angular, Python, Django, Firebase, D3js, Git,
    Social Media Strategy, Marketing
    Web Content Development
Leadership</p>
        <h3>Personal Skills</h3>
        <p>
            Creative Spirit<br></br>
            Driven<br></br>
            Passionate<br></br>
            Results Oriented<br></br>
            Problem Solver<br></br>
            Collaborative<br></br>
            Fast Learner<br></br>
        </p>
    </div>
)

export default SideBar