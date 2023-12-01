import { AnimalList } from "../cmps/AnimalList"
import { useState } from "react"
import "../css/Animals.css"

export function AnimalsIndex() {
  const [animalsInfos] = useState([
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
    },
  ]);

  return (
    <section className="animals-index">
      <h1>Rare Animals</h1>
      <AnimalList animalsInfos={animalsInfos} />
    </section>
  );
}
