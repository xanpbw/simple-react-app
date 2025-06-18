import React from 'react'

function HelloWorld({props,name}) {
  const hello = 'Hello World';
  const mystyle = {color:'white', padding:'10px', backgroundColor:'black', marginTop:'15px'}
  return (
    <div>
      <div>{hello}! {name}</div>
      <div>{props}</div>
      <div style={mystyle}>This is Inline Style</div>
    </div>
  )
}

export default HelloWorld