import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom';
import SingleUser from './SingleUser';
import './style.css'


function Users() {
  const [numPage, setNumPage] = useState(1)
  const [amountItems, setAmountItems] = useState(6)
  const [users, setUsers] = useState()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function getUsers() {
      let response = await axios.get(`https://retoolapi.dev/LFOMOn/data?_page=${numPage}&_limit=${amountItems}`)
      console.log(response.data);
      setUsers(response.data)
      setIsReady(true)
      
    }
    getUsers();
  },[numPage])



   return (
    <div className='container'>
      <h1>Users</h1>
      <NavLink to='/finished'>Go to finished</NavLink>
      <div className='flex-container'>
        {isReady && users.map((user) => 
        <Link 
          to={`/users/${user.id}`}
          style={{textDecoration: "none", color: 'black'}}
          key={user.id}
        >
          <SingleUser  id={user.id} name={user.users} loc={user.location}/>
        </Link>
        
      )}
      </div>
      <div className="prev-next">
        <button className='prev-btn22' onClick={()=> setNumPage(numPage - 1)}>Prev</button>
        <button className='next-btn' onClick={()=> setNumPage(numPage + 1)}>Next</button>
      </div>
    </div>

  )
}
export default Users;