import Popup from "./component/Popup";
import { useState } from "react";

function App() {
  const [ usebutton,setButton]=useState(false)
  return (
    <div className="App">
      <main>
        <h1>react</h1>
        <button onClick={()=>setButton(true)}>open</button>
        <Popup trigger={usebutton} setTrigger={setButton}>
          <h3>Add Devices & Parameters</h3>
        </Popup>
      </main>
    </div>
  )
}
export default App;