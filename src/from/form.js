import React,{useState} from "react";

function Pp(){
    
    const [use,setUse]=useState({
        firstName:"",
        lastName:"",
        email:"",
    });
    const handleFirstNameInputChange=(event)=>{
        const {name,value}=event.target;
        setUse((event)={
            ...use,
            [name]:value,
        })
    }
    const handleemail=(email)=>{
        const reemail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       return reemail.test(email);
    }
    
    const handleSbmit=(event)=>{
        event.preventDefault();
        if(!use.firstName){
            alert("your first name is field")
            return;
        }
        if(!use.lastName){
            alert("your last name is field")
            return;
        }
        if(!handleemail(use.email)){
            alert("your fill email")
            return;
        }
        alert("Value submitted successfully")
        setUse({
            firstName:"",
            lastName:"",
            email:"",
        })
    }
    return(
        
        <div>
            <form onSubmit={handleSbmit}>
                <input type='text' name="firstName" placeholder="firstName"value={use.firstName} onChange={handleFirstNameInputChange}/>
                <input type="text" name="lastName" placeholder="lastName"value={use.lastName} onChange={handleFirstNameInputChange}/>
                <input type="text" name="email" placeholder="Email" value={use.email} onChange={handleFirstNameInputChange}/>
                <button>submitted</button>
            </form>
        </div>
    )
}
export default Pp;