import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";

export const animalService = {
//   query,
  save,
  remove,
  getById,
  createAnimal,
  getDefaultFilter,
  initiateAnimals
}

const STORAGE_KEY = "animalsDB";

// async function query(filterBy) {
//   let animals = await storageService.query(STORAGE_KEY);
//   return animals;
// }

function getById(id) {
  return storageService.get(STORAGE_KEY, id);
}

function remove(id) {
  return storageService.remove(STORAGE_KEY, id);
}

function save(animalToSave) {
  if (animalToSave.id) {
    return storageService.put(STORAGE_KEY, animalToSave);
  } else {
    animalToSave.isOn = false;
    return storageService.post(STORAGE_KEY, animalToSave);
  }
}

function createAnimal(model = "", type = "", batteryStatus = 100) {
  return {
    model,
    batteryStatus,
    type,
  };
}

function getDefaultFilter() {
  return {
    type: "",
    minBatteryStatus: 50,
    maxBattery: "",
    model: "",
  };
}

function initiateAnimals() {
  let animals = utilService.loadFromStorage(STORAGE_KEY);
  if (!animals || !animals.length) {
    animals = [
      {
        type: "Malayan Tiger",
        count: 787,
      },
      {
        type: "Mountain Gorilla",
        count: 212,
      },
      {
        type: "Fin Whale",
        count: 28,
      }
    ];

    utilService.saveToStorage(STORAGE_KEY, animals);
  }
}
