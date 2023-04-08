import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../store/slices/UserSlice'
import { deleteUsers } from '../store/slices/UserSlice'

const DisplayUsers = () => {
   const data = useSelector((state)=>{
    return state.users;
   });
   //console.log(data);
   const dispatch = useDispatch();

   const deleteUser = (id) => {
    dispatch(removeUser(id));
   }


   const deleteAllUser = () => {
    dispatch(deleteUsers());
   }
  return (
    <>
       {data.map((user, index)=>(
        <li key={index}>{user} <span onClick={()=> deleteUser(index)}><strong>Delete It</strong></span></li>
       ))}
       <button onClick={()=> deleteAllUser()}>Clear Data</button>
    </>
  )
}

export default DisplayUsers