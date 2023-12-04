// eslint-disable-next-line react/prop-types
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function SelectWatcher({watcherMovies,onCloseSelectModal}) {
  const [watcherToAdd, setWatcherToAdd] = useState({ fullname: "", movies: "" });

  const handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    setWatcherToAdd((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev)
    onAddWatcher(watcherToAdd.fullname, watcherToAdd.movies);
  };

  return (
    <section className="modal-section">
      <h3> Watcher's Movies</h3>
               <ul className='movies'>
              {watcherMovies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
      <p></p>
      <button className="addmodal-button-close" onClick={onCloseSelectModal}>X</button>
    </section>
  );
}
