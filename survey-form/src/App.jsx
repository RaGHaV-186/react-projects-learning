import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    skills: [],
    country: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    gender: "",
    skills: "",
    country: ""
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    // ✅ Checkbox logic
    if (type === "checkbox") {
      setForm((prev) => {
        let updatedSkills;

        if (checked) {
          updatedSkills = [...prev.skills, value];
        } else {
          updatedSkills = prev.skills.filter(
            (skill) => skill !== value
          );
        }

        return {
          ...prev,
          skills: updatedSkills
        };
      });
    } 
    // ✅ Other inputs
    else {
      setForm((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {
      name: "",
      email: "",
      gender: "",
      skills: "",
      country: ""
    };

    // ✅ Validation
    if (form.name === "") {
      newErrors.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Valid email required";
    }

    if (form.gender === "") {
      newErrors.gender = "Select gender";
    }

    if (form.skills.length === 0) {
      newErrors.skills = "Select at least one skill";
    }

    if (form.country === "") {
      newErrors.country = "Select country";
    }

    setErrors(newErrors);

    // ❌ Stop submit if errors exist
    if (
      newErrors.name ||
      newErrors.email ||
      newErrors.gender ||
      newErrors.skills ||
      newErrors.country
    ) return;

    console.log("Form Submitted:", form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Survey Form</h2>

      {/* Name */}
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      {/* Gender */}
      <div>
        <p>Gender:</p>

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={form.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={form.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>

        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
      </div>

      {/* Skills */}
      <div>
        <p>Skills:</p>

        <label>
          <input
            type="checkbox"
            value="React"
            checked={form.skills.includes("React")}
            onChange={handleChange}
          />
          React
        </label>

        <label>
          <input
            type="checkbox"
            value="JavaScript"
            checked={form.skills.includes("JavaScript")}
            onChange={handleChange}
          />
          JavaScript
        </label>

        <label>
          <input
            type="checkbox"
            value="Python"
            checked={form.skills.includes("Python")}
            onChange={handleChange}
          />
          Python
        </label>

        {errors.skills && <p style={{ color: "red" }}>{errors.skills}</p>}
      </div>

      {/* Country */}
      <div>
        <label>Country:</label>
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Germany">Germany</option>
        </select>

        {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;