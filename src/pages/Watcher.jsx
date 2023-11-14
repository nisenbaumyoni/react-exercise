import { useEffect, useState } from "react";
import { watcherService } from "../services/watcher.service";

export function Watcher() {
  const [watchers, setWatchers] = useState(null);

  console.log("rendered");
  useEffect(() => {
    console.log("mounted");
    loadWatchers();
  }, []);

  async function loadWatchers() {
    try {
      const watchers = await watcherService.query();
      setWatchers(watchers);
      console.log(watchers);

    } catch (err) {
      console.log("Had issues loading cars", err);
    }
  }

  async function onRemoveWatcher(watcherId) {
    try {
        // eslint-disable-next-line no-unused-vars
        const deletedCount = await watcherService.remove(watcherId)
        setWatchers((prevWatchers) => {
            return prevWatchers.filter(watcher => watcher.id !== watcherId)
        })
    } catch (err) {
        console.log('Had issues removing watcher', err)
    }
}
  console.log(watchers);

  if (!watchers) return <div>Loading...</div>;

  return (
    <section className="watcher-app">
      <h2>List of watchers</h2>
      <ul>
        {watchers.map((watcher) => (
          <section key={watcher.id}>
            <h3 className="watcher">{watcher.fullname}</h3>
            <ul className="Movies">{watcher.movies.map((movie) => (<li key={movie}>{movie}</li>))}</ul>
            <button onClick={() => onRemoveWatcher(watcher.id)}>X</button>
          </section>
        ))}
      </ul>
    </section>
  );
}
