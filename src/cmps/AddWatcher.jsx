import { useState } from "react";

export function AddWatcher() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const fullname = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [fullname]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your movies
          <input 
            type="text" 
            name="movies" 
            value={inputs.movies} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
    )
  }