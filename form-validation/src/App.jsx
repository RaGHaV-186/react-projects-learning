import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e){
    e.preventDefault()

    let newErrors = {
      name:"",
      email:"",
      password:"",
      confirmPassword:""
    }
    if(form.name == ""){
      newErrors.name = "Name is required"
    }
    if(!form.email.includes("@")){
      newErrors.email = "@ must be included in email"
    }
    if (form.password.length < 6){
      newErrors.password = "Password must have atleast 6 characters"
    }
    if (form.confirmPassword != form.password){
      newErrors.confirmPassword = "Passwords must match"
    }

    setErrors(newErrors)
    
    if (newErrors.name || newErrors.email || newErrors.password || newErrors.confirmPassword) return

    console.log("form submitted", form)
  } 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <div>
          <button type="submit">Click to Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;