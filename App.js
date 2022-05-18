import React from 'react';
import "./App.js";
import"./index.css";

const[name,setname]=useSatate(event);
{

}

function App (){
return(
   <form>
   <label>Name</label>
   <input className="box" type="text" placeholder="Enter ur name" onClick={()=>{event}}></input><br></br><br></br>
   <labe>password</labe>
   <input className="box" type="password" placeholder="Password" onClick={()=>{event}}></input><br></br><br></br>
   <label>Rating</label>
   <input className="box"type="text" placeholder="Rating" onClick={()=>{event}}></input><br></br><br></br>
   <button type="submit">sumbit</button>
   </form>
)
}
export default App