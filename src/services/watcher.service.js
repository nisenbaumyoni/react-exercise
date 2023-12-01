import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const watcher_KEY = 'watcherDB'
var gFilterBy = { txt: '', minMovie: 0 }
_createWatchers()

export const watcherService = {
    query,
    get,
    remove,
    save,
    getEmptyWatcher,
    getNextWatcherId,
    getFilterBy,
    setFilterBy
}

async function query() {
    let watchers = await storageService.query(watcher_KEY)
    if (gFilterBy.txt) {
        const regex = new RegExp(gFilterBy.txt, 'i')
        watchers = watchers.filter(watcher => regex.test(watcher.fullname))
    }
    return watchers
}
function get(watcherId) {
    return storageService.get(watcher_KEY, watcherId)
}

function remove(watcherId) {
    return storageService.remove(watcher_KEY, watcherId)
}

function save(watcher) {
    if (watcher.id) {
        return storageService.put(watcher_KEY, watcher)
    } else {
        return storageService.post(watcher_KEY, watcher)
    }
}

function getEmptyWatcher(fullname = '', movies = {}) {
    let img = ''
    const randomImgNum = Math.floor(Math.random() * 4)
    switch(randomImgNum) {
        case 0: img='./src/assets/watcher-blue.png'; break;
        case 1: img='./src/assets/watcher-red.png'; break;
        case 2: img='./src/assets/watcher-green.png'; break;
        case 3: img='./src/assets/watcher-purple.png'; break;
        default: img = './src/assets/watcher-green.png'
    }

    const id = ''
    return { id, fullname, movies, img }
}

function getFilterBy() {
    return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
    if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
    if (filterBy.minSpeed !== undefined) gFilterBy.minSpeed = filterBy.minSpeed
    return gFilterBy
}

async function getNextWatcherId(watcherId) {
    const watchers = await storageService.query(watcher_KEY)
    var idx = watchers.findIndex(watcher => watcher.id === watcherId)
    if (idx === watchers.length - 1) idx = -1
    return watchers[idx + 1].id
}

function _createWatchers() {
    console.log('inside _createWatchers PLURAL')
    let watchers = utilService.loadFromStorage(watcher_KEY)
    if (!watchers || !watchers.length) {
        watchers = []
        watchers.push(_createWatcher('Puki Ba', ['Rambo','Rocky']))
        watchers.push(_createWatcher('Yoni Po', ['Borat','Anchorman']))
        watchers.push(_createWatcher('Joni Sham', ['Forest Gump','Jump']))

        utilService.saveToStorage(watcher_KEY, watchers)
    }
}

function _createWatcher(fullname, movies) {
    const watcher = getEmptyWatcher(fullname, movies)
    watcher.id = utilService.makeId()
    return watcher
}