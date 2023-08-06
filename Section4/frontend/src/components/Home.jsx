import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <p style={{ fontSize: '50px', backgroundColor:'lightblue' }}>Inline css in jsx</p>
      <p className='myclass'>We use classname here in jsx</p>
      <input type="text" />
      <br />
    </div>
  )
}

export default Home;