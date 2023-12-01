import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function AddWatcher({onAddWatcher}) {
    const [inputs, setInputs] = useState({fullname : "", movies : ""});
  
    const handleChange = (event) => {
      const field = event.target.name;
      const value = event.target.value;
      setInputs(prev => ({...prev, [field]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("inputs",inputs)
      onAddWatcher(inputs.fullname, inputs.movies)
    }
  
    return (
      <form className='Addwatcher-form' onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          name="fullname" 
          value={inputs.fullname} 
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