import React from 'react'
import { fakeUserData } from '../api'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slices/UserSlice'
import DisplayUsers from './DisplayUsers'

const UserDetails = () => {
    const dispatch = useDispatch();

    const addNewUser = (name) =>{
        console.log(name);
        dispatch(addUser(name));
    }

  return (
    <>
      <button onClick={()=> addNewUser(fakeUserData())}>Add new user:</button>
       <h2>List of user details:</h2>
       <ul>
        <DisplayUsers/>
       </ul>
    </>
  )
}

export default UserDetails