// import React,{useState} from "react";
// function Ll(){
//     const[set,setState]=useState(0);
//     const tt=()=>{
//         setState((count)=>count+1)
//     }
//     return(
//         <div>
//             <p>i am ashwin{set}</p>
//             <button onClick={tt}>try me</button>
//         </div>
    
//     )
// }
// export default Ll;
import React,{useState,useEffect} from "react";
const[set,setState]=useState(0);
useEffect(()=>{
setTimeout(()=>{
    setState((count)=>count+1)
},1000)
})
function Oo(){
    return(
        <div>
              <p>i am ashwin{set}</p>     

        </div>
    )
}
export default Oo;






















// import React,{useState,useEffect,useRef} from "react";
// function Mm(){
//     const [set,setState]=useState("");
//     const pp=useRef(0);
//   useEffect(()=>{
//     pp.current=pp.current+1;
//   });
//   return(
//     <div>
//         <input type={set} onChange={(e)=>setState(e.target.value)}/>
//         <h1>count:{pp.current}</h1>
//     </div>
    
//   )
// }
// export default Mm;



// import React,{useEffect,useRef} from "react";
// function Vv(){
    
//     const Kkk=useRef();
//   useEffect(()=>{
//     setTimeout(()=>{
//         Kkk.current.textContent="i am surya";
//     },6000)
//   })
//   return(
//     <div>
//         <h1 ref={Kkk}>i am ashwin</h1>
//     </div>
//   )
// }
// export default Vv;






// function Nn(){
//     const[showHeader,setShowHeader]=useState("false")
//     const Ttt=()=>{
//         setShowHeader("true");
//     }
//     // console.log("ASS",showHeader);
//     return <div>
//         <p>i am {showHeader} ashwin</p>
//     <button onClick={Ttt}>Try</button>
//     </div>
// }
// export default Nn;