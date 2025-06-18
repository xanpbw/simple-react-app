import React from 'react'

function Home(props) {
  return (
  <div>
    <h2>Home Page</h2>
    <h3>{props.props1}</h3>
    <h3>{props.props2}</h3>
    <h4 className='simple-style-child'>Ini stylesheet di component/child</h4>
  </div>
  )
}

export default Home
