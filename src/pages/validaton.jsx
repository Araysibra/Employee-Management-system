export const EmptyValidation=(parm)=>{
    const flag=parm.trim().length===0;
    if(flag){
      return "This field is required"
    }
    return false;
  }

  export const validateEmail=(parm)=>{
    if(EmptyValidation(parm)){
        return EmptyValidation(parm)
    }
    else{
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/.test(parm)){
            return false
        }
        return "Invalid email address"
    }
  }

  export const validateNumber=(parm)=>{
    if(EmptyValidation(parm)){
        return EmptyValidation(parm)
    }
    else{
        if(parm.trim().length>9&&parm.trim().length<12){
            return false
        }
        return "Invalid mobile number"
    }
  }