import React, {useState} from "react";
function Form(){
const [set,setState] = useState({
    firstName:"",
    lastName:"",
    email:"",

});
const handleFirstNameInputChange=(event)=>{
    console.log("i am first",event.target)
   const {name,value}=event.target; 
    setState((set)=>({
        ...set,
        [name]:value,

    }))
};
const validateEmail = (email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const handleSbmit = (event)=>{
    event.preventDefault();
    if(!set.firstName) {
        alert("please fill the value first name ")
        return;
    }
    if(!set.lastName) {
        alert("please fill the value last name ")
        return;
    }
    if(!validateEmail(set.email)) {
        alert("please fill the value email ")
        return;
    }
    alert("Value submitted successfully");
    setState({
        firstName:"",
        lastName:"",
        email:"",
    })
}
// const handleSecondNameInputChange=(event)=>{
    
//     setState((set)=>({
//         ...set,
//         lastName:event.target.value,

//     }))
// };
// const handleThirdNameInputChange=(event)=>{
    
//     setState((set)=>({
//         ...set,
//         email:event.target.value,

//     }))
// }


return(  
    <div>
        <form onSubmit={handleSbmit}>
            <label>firstName</label>
            <input type="text" name="firstName" placeholder="firstName" value={set.firstName} onChange={handleFirstNameInputChange}/><br/><br/>
            <label>lastName</label>
            <input type="text" name="lastName" placeholder="lastName" value={set.lastName} onChange={handleFirstNameInputChange}/><br/><br/>
            <label>Email</label>           
            <input type="text" name="email" placeholder="Email" value={set.email} onChange={handleFirstNameInputChange}/><br/><br/>
            <button>submit</button>


        </form>
    </div>
)
}
export default Form;