import React, { useEffect, useState } from "react";
import { EmptyValidation,validateEmail,validateNumber } from "./validaton";
import { PostData, getDetail,putApiData } from "./Api";
import { useNavigate,useParams } from "react-router-dom";
function AddEmp() {
  // by editing data

  const {id}=useParams()

  const empDetail =async(parm,subUrl)=>{
    const response=await getDetail(parm,subUrl);
    setfullname({...fullname,value:response?.data.fullname})
    setemail({...email,value:response?.data.Email})
    setPhone({...phone,value:response?.data.phone})
    setAddress({...address,value:response?.data.address})
    setJob({...Job,value:response?.data.jobTitle})    
    setgender({...gender,value:response?.data.gender})    
    console.log(response);
  }

  useEffect(()=>{
    console.log("id->",id)
    if(id){
         empDetail(id,"employeeList");
    }
  })
  const Navigate=useNavigate()

  // for email

  // full name

  const [fullname,setfullname]=useState({
    name:"fullname",
    id:"fullname",
    value:null,
    error:false,
    placeholder:"Enter your full name"
  })

  const [gender,setgender]=useState({
    name:"gender",
    id:"gender",
    value:"male",
    error:false,
    placeholder:"Enter your full name"
  })

  const [email,setemail]=useState({
    name:"email",
    id:"email",
    value:null,
    error:false,
    placeholder:"Enter your Email"
  })
  const [phone,setPhone]=useState({
    name:"phone",
    id:"phone",
    value:null,
    error:false,
    placeholder:"Enter your phone number",
    type:"number"
  })
  const [address,setAddress]=useState({
    name:"address",
    id:"address",
    value:null,
    error:false,
    placeholder:"Enter your city address"
  })

  const [Job,setJob]=useState({
    name:"Job",
    id:"Job",
    value:null,
    error:false,
    placeholder:"Enter  Job title"
  })
  

  const onChangeHandle=(e)=>{
     const{name,value}=e.target   
     if(name===fullname.name){
       setfullname({
        ...fullname,
        value,
        error:EmptyValidation(value)
       })
    }

     if(name===email.name){
      setemail({
       ...email,
       value,
       error:validateEmail(value)
      })
    }

    if(name===phone.name){
      setPhone({
       ...phone,
       value,
       error:validateNumber(value)
      })
    }

    if(name===address.name){
      setAddress({
       ...address,
       value,
       error:EmptyValidation(value)
      })
    }

    if(name===gender.name){
      console.log(value);
      setgender({
       ...gender,
       value,
      })
    } 

    if(name===Job.name){
      setJob({
       ...Job,
       value,
       error:EmptyValidation(value)
      })
    }
  }
  const submitData =async(parm)=>{
    console.log(id)
      const response=  id? await putApiData(id,"employeeList",parm): await PostData(parm,"employeeList")
      if(response){
        Navigate("/")
      }
  }
const handleSubmit=()=>{
  if(fullname.value && !fullname.error && email.value && !email.error && phone.value && !phone.error && address.value && !address.error && Job.value && !Job.error && gender.value && !gender.error){

    const payLoad={
      fullname:fullname.value,
      Email:email.value,
      phone:phone.value,
      Address:address.value,
      jobTitle:Job.value,
      gender:gender.value
    }    
    console.log("payload",payLoad);
    submitData(payLoad)
  }
  else{
    if(!fullname.value){
      // onChangeHandle({target:{name:fullname.name,value:""}})
     setfullname({...fullname,error:"this is required"})
  }
    console.log("Failure😡");
  }
}
  return (
    <div>
      <form class="w-50" style={{ marginLeft: "30%",backgroundColor:"#cfe8fc",padding:"20px" }}>
        <h1 style={{ width: "100%", textAlign: "center" }}>
          Register An Employee
        </h1>        
        <span>{fullname.error}</span>

        <div class="mb-3">         
          <label class="label">Full Name</label>
          <input  class="form-control" {...fullname}   onChange={onChangeHandle} />      
        </div>          
        <span>{email.error}</span>
        <div class="mb-3">
          <label class="label">Email address</label>
          <input type="text" class="form-control" {...email} onChange={onChangeHandle}/>
        </div>
        <span>{phone.error}</span>
        <div class="mb-3">
          <label class="label">phone number</label>
          <input type="text" class="form-control" {...phone} onChange={onChangeHandle} />
        </div>

        <span>{address.error}</span>
        <div class="mb-3">
          <label class="label">City Address</label>
          <input type="text" class="form-control" {...address} onChange={onChangeHandle} />
        </div>

        <span>{Job.error}</span>
        <div class="mb-3">
          <label class="label">Job title</label>
          <input type="text"  class="form-control" id="exampleInputfullname" {...Job} onChange={onChangeHandle}/>
        </div>

        <div class="gender"  >       
            <div class="mb-3 form-check">
                <input  type="radio" class="form-check-input" id="exampleCheck1" name="gender" defaultChecked {...gender} onChange={onChangeHandle} value="male"/>
                <label class="form-check-label" for="exampleCheck1" >Male</label>
            </div>
            <div class="mb-3 form-check">
                <input  type="radio" class="form-check-input" id="exampleCheck2" name="gender" {...gender} onChange={onChangeHandle} value="female"/>
                <label  class="form-check-label" for="exampleCheck1" >Female</label>
            </div>
        </div>
          
            <button onClick={handleSubmit}   type="button" class="btn btn-primary"  style={{marginLeft:"20%", width:"50%",fontWeight:"bold"}}>Submit</button >
        </form>
  </div>
  );
}

export default AddEmp;
