import '../css/Watcher.css'
import { useEffect, useState } from 'react';
import { watcherService } from '../services/watcher.service';
import { AddWatcher } from '../cmps/AddWatcher';
import { SelectWatcher } from '../cmps/SelectWatcher';

export function Watcher() {
  const [watchers, setWatchers] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);

  useEffect(() => {
    loadWatchers()
  }, []);

  async function loadWatchers() {
    try {
      const watchers = await watcherService.query();
      setWatchers(watchers)
    } catch (err) {
      console.log('Had issues loading cars', err);
    }
  }

  async function onAddWatcher(fullname,moviesString){
    const moviesArray =  moviesString.split(',')
    const watcher = watcherService.getEmptyWatcher(fullname,moviesArray)
    const newWatcher = await watcherService.save(watcher)

    setWatchers((prevWatchers) => [newWatcher, ...prevWatchers])
    setIsAddModalOpen(false)
  }

  function onSelectWatcher(){

    setIsSelectModalOpen(false)
  }
  
  async function onRemoveWatcher(watcherId) {
    try {
      // eslint-disable-next-line no-unused-vars
      const deletedCount = await watcherService.remove(watcherId);
      setWatchers((prevWatchers) => {
        return prevWatchers.filter((watcher) => watcher.id !== watcherId);
      });
    } catch (err) {
      console.log('Had issues removing watcher', err);
    }
  }

  if (!watchers) return <div>Loading...</div>;
  
  return (
    <section className='watcher-app'>
      <button onClick={() => {setIsAddModalOpen(true)}}>add</button>
      {isAddModalOpen && <AddWatcher onAddWatcher={onAddWatcher}/>}

      <h2>List of watchers</h2>
      <ul className='watcher-list'>
        {watchers.map((watcher) => (
          <section className='watcher-section' key={watcher.id}>
            <h3 className='watcher'>{watcher.fullname}</h3>
            <ul className='Movies'>
              {watcher.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
            <button onClick={() => onRemoveWatcher(watcher.id)}>X</button>
            <button onClick={() => {setIsSelectModalOpen(true)}}>Select</button>
            {isSelectModalOpen && <SelectWatcher watcherMovies={watcher.movies} onSelectWatcher={onSelectWatcher}/>}
          </section>
        ))}
      </ul>
    </section>
  );
}
