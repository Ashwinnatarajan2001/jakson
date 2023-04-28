import React, { useState,useEffect } from "react";
function Timer() {
  const [count, setCount] = useState(0);
  let value=[]
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    
    },[]);
  
    return <h1>I have rendered {count} times!</h1>;
  }
  export default Timer;


  
// import React, {useState,useEffect} from "react";
// function Ll(){
//     const [state,setState]=useState(0);
//     useEffect(()=>{
//         setTimeout(()=>{
//          setState((count)=>count+1);
        
//     },1000)
    
// },[]);
// return(
//     <div>
//         <h1>i am {state} ashwin</h1>
//     </div>
// )
// }
// export default Ll;

// function CompDidMount(){
//     const [user,setUser]=useState([]);
//     useEffect(()=>{
//         let response=[
//             {
//                 id:0,
//                 name:"Ashwin",

//             },
//             {
//                 id:1,
//                 name:"Surya",
//             }
//         ]
//         setUser(response);
//     },[])
//     return <div>{user[0].name}</div>
//}
//export default CompDidMount;