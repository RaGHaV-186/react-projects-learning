import { useState } from "react";

function App(){
  const [items,setItems] = useState([])
  const [text,setText] = useState("")

  function addItem(){
    if (text.trim()==="" ) return

    setItems((prev)=>[...prev,text])

    setText("")

  }
  function deleteItem(index){
    setItems((prev)=> prev.filter((_,i)=> i !== index)) 
  }
  return (
    <div>
      <div>
        {items.map((item,index)=>(
          <div key={index}>
          <ul> 
          <li key={index}>{item}</li>
          </ul>
          <button onClick={()=>deleteItem(index)}>Delete</button>
          </div>
        ))}
        <button></button>
      </div>
      <div>
        <label>Enter item name</label>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
        <button type="submit" onClick={addItem}>ADD</button>
      </div>
    </div>
  )
}
export default App