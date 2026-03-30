import { useState } from "react";

function App(){
  const [items,setItems] = useState([
    {name:"iphone",price:999,quantity:1},
    {name:"Macbook pro M4",price:1299,quantity:1}
  ]
  )
  function increaseQuantity(index){
    setItems((prev)=>{
      return prev.map((item,i)=>{
        if(i==index){
          return {...item,quantity:item.quantity+1}
        }
        return item
      })
    })
  }

  function decreaseQuantity(index){
    setItems((prev)=>{
      if (prev[index].quantity <=1){
        return prev
      }

      return prev.map((item,i)=>{
        if(i==index){
          return{...item,quantity:item.quantity - 1}
        }
        return item
      })
    })
  }
  const grandTotal = items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

  return (
    <div>
      {items.map((item,index)=>(
        <div key={index}>
        <h2>{item.name}-{item.price}$-Qty:{item.quantity}</h2>
        <button onClick={()=>increaseQuantity(index)}>+</button>
        <button onClick={()=>decreaseQuantity(index)}>-</button>
        <h4>Subtotal: {item.price * item.quantity}</h4>
        </div>
      ))}
      <div>
        <h2>Grand Total:{grandTotal}</h2>
      </div>
    </div>
  )
}

export default App