import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Nav from './Nav'
import { getApiCall,getDelete } from './Api'
function Home() {
  const[employeeList,setEmployeeList]=useState([])

    const navigate=useNavigate()

    const getEmpdata=async(parm)=>{
      const response= await getApiCall(parm)
      setEmployeeList(response?.data)
   }
   useEffect(()=>{
        getEmpdata("employeeList")
   },[])

const onDelteHandle=async(e)=>{
     const response=await getDelete("employeeList",e.target.value)
    console.log(e.target.value);
     response.status===200 && navigate("/");
     getEmpdata("employeeList")

}
   
  return (
    <div>
     <Nav/>
      <table class="table">
        <thead>
          <tr>
      <th scope="col">full name</th>
      <th scope="col">Email</th>
      <th scope="col">phone</th>
      <th scope="col">Address</th>
      <th scope="col">Job title</th>
      <th scope="col">Gender</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
          employeeList?.map(emp=><tr> <td>{`${emp.fullname} `}</td>
           <td>{`${emp.Email}`}</td> <td>{`${emp.phone} `}</td>
           <td>{`${emp.Address} `}</td>  <td>{`${emp.jobTitle} `}
           </td> <td>{`${emp.gender} `}</td>
           <td className='action'> <button onClick={()=>navigate(`/edit/${emp._id} }`)} >Edit</button>
          <button value={`${emp._id}`} onClick={onDelteHandle}>Delete</button> </td> </tr>)
      }
      </tbody>
      </table>
    </div>
  )
}

export default Home
