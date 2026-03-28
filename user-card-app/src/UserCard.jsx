function UserCard({name,age,role}){
    return (
        <div style={{
      border: "1px solid black",
      padding: "10px",
      margin: "10px",
      borderRadius: "8px"
    }}>
            <h2>{name}</h2>
            <p>Age:{age}</p>
            <p>Role:{role}</p>
        </div>
    )
}

export default UserCard