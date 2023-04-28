import React, { useRef, useEffect } from "react";

function Ref() {
  const titleRef = useRef();

  useEffect(function () {
    setTimeout(() => {
      titleRef.current.textContent = "Update Text";
      titleRef.current.style.backgroundColor= "powderblue";
    
    }, 5000);
     
  } );


  return <div style={{color:"red"}} ref={titleRef}>Original Title</div>;
}

export default Ref;