import React,{useState} from "react";
function Example(){
    const [set,useset]=useState({
        firstName:"",
        lastName:"",
        message:"",
        email:"",

    })
    const handleinput=(event)=>{
        const {name,value}=event.target;
        useset((event)={
            ...set,
            [name]:value,

        })
    }
    const xemail=(email)=>{
        const mail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       return mail.test(email);
    }
    const onsubmitt=(event)=>{
        event.preventDefault();
        if(!set.firstName){
           alert("u fill the first name")  
           return;
        }
        if(!set.lastName){
            alert("u fill the last name")
            return;
        }
        if(!set.message){
            alert("u fill the message")
            return;
        }
        if(!xemail(set.email)){
            alert("u fill vaild email")
            return
        }
        alert("succesfully submitted")
        useset({
            firstName:"",
            lastName:"",
            email:"",
        })
  
    }
    return(
        <div style={{
         backgroundColor:"red",
         marginTop:"50px", 
         alignItems:"center", 
         

        }
        }
        >
            <form onSubmit={onsubmitt}>
                <label>FirstName</label>
                <input type="text" name="firstName" placeholder="firstname" value={set.firstName} onChange={handleinput}/><br/><br/>
                <label>LastName</label>
                <input type="text" name="lastName" placeholder="lastname" value={set.lastName} onChange={handleinput}/><br/><br/>
                <label>message</label>
                <textarea></textarea><br/><br/>
                <label>Email</label>
                <input type="text" name="email" placeholder="email" value={set.email} onChange={handleinput}/><br/><br/>
                <button>submitted</button>
            </form>
        </div>
    )
}
export default Example;