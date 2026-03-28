import ProductCard from "./ProductCard";

function App(){
  const Products = [
    {name:"iphone 17 pro", price:1299, instock:false},
    {name:"Macbook Pro M4", price:1599,instock:true}
  ]
  return (
    <div>
      <h1>List Of Products</h1>
      <ProductCard name={"iphone 17"} price={999} instock={true}/>
      <ProductCard name={"Macbook Air M4"} price={999} instock={false}/>
      {Products.map((Product,index)=>(
        <ProductCard name={Product.name} price={Product.price}/>
      ))}
    </div>
  )
}
export default App