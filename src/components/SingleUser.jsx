import React from 'react'

function SingleUser({id, name, loc}) {

  function getInfoUser(params) {
    
  }


   return (
    <div className='single-item' onClick={getInfoUser}>
      <div>Name: {name}</div>
      <div>User location: {loc}</div>
    </div>
  )
}
export default SingleUser;