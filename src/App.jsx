import './css/App.css';
import { AnimalsIndex } from './pages/AnimalsIndex';
import { CountDown } from './cmps/CountDown';
import { SeasonIndex } from './pages/SeasonIndex';
import { Watcher } from './pages/Watcher';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('animals');

  function onSetPage(ev, selectedPage) {
    ev.preventDefault();
    setPage(selectedPage);
  }

  return (
    <>
      <header className='app-header'>
        <nav>
          <a className='app-nav-a' onClick={(ev) => {onSetPage(ev, 'animals')}}>Animals</a>
          <a className='app-nav-a' onClick={(ev) => {onSetPage(ev, 'seasons')}}>Sessions</a>
          <a className='app-nav-a' onClick={(ev) => {onSetPage(ev, 'Watcher')}}>Watcher</a>
          <a className='app-nav-a' onClick={(ev) => {onSetPage(ev, 'CountDown')}}>Timer</a>
          <a className='app-nav-a' onClick={(ev) => {onSetPage(ev, 'Mouse')}}>Mouse</a>
        </nav>
      </header>
      <main className='app-main'>
        {(page === 'animals') && <AnimalsIndex />}
        {(page === 'seasons') && <SeasonIndex/>}
        {(page === 'Watcher') && <Watcher/>}
        {(page === 'CountDown') && <CountDown startFrom={10} onDone={() => {console.log('Done!')} }/>}
        {(page === 'Mouse') && <p>WIP</p>}
      </main>
    </>
  );
}

export default App;