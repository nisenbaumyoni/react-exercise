// eslint-disable-next-line react/prop-types
export function SelectWatcher({watcherMovies,onSelectWatcher}) {
    
    console.log("SelectWatcher watcher", watcherMovies)
    console.log("SelectWatcher onSelectWatcher", onSelectWatcher)

    return (
        <section className='select-watcher'>
            <h1>hello</h1>
        {/* <ul className="Movies">
        {watcherMovies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul> */}
      <button onClick={onSelectWatcher(false)}>Close</button>
      <button>Close</button>

      </section>
    )
  }