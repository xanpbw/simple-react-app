import React from 'react'

function HelloWorld({props,name}) {
  const hello = 'Hello World';
  const mystyle = {color:'white', padding:'10px', backgroundColor:'black', marginTop:'15px'}
  return (
    <div>
      <div>{hello}! {name}</div>
      <div>{props}</div>
      <div style={{color:'white', padding:'10px', backgroundColor:'darkblue', marginTop:'15px'}}>This is Inline Style</div>
      <div style={mystyle}>This is Inline Style v2</div>
    </div>
  )
}

export default HelloWorld