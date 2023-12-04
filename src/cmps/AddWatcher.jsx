import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function AddWatcher({ onAddWatcher, onCloseAddModal }) {
  const [watcherToAdd, setWatcherToAdd] = useState({ fullname: "", movies: "" });

  const handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    setWatcherToAdd((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev)
    watcherToAdd.fullname && watcherToAdd.movies ? onAddWatcher(watcherToAdd.fullname, watcherToAdd.movies) : ''
  };

  return (
    <section className="modal-section">
      <h3> Add Watcher</h3>
      <label>
        Enter your name:
        <input className='addmodal-inputs-name'
          type="text"
          name="fullname"
          value={watcherToAdd.fullname}
          onChange={handleChange}
        />
      </label>{" "}
      <p></p>
      <label>
        Enter your movies
        <input className='addmodal-inputs-movies'
          type="text"
          name="movies"
          value={watcherToAdd.movies}
          onChange={handleChange}
        />
      </label>
      <p></p>
      <button className="addmodal-button-close" onClick={onCloseAddModal}>X</button>
      <button className="addmodal-button-add" onClick={handleSubmit}>Add</button>
    </section>
  );
}
