import UserCard from "./UserCard";

function App(){
  const users = [
    { name: "Raghav", age: 22, role: "Developer" },
    { name: "John", age: 25, role: "Designer" },
    { name: "Alex", age: 28, role: "Manager" }
  ];
  return (
    <div>
      <h1>User Card List</h1>

      {users.map((user,index)=>(
        <UserCard key={index} name={user.name} age={user.age} role={user.role}></UserCard>
      ))}
    </div>
  )
}

export default App
