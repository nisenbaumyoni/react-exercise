/* eslint-disable react/prop-types */
import { AnimalPreview } from "./AnimalPreview";

export function AnimalList({ animalsInfos }) {
  return (
    <>
      <section className="container">
        <table>
          <thead>
            <tr className="animal-preview-th">
              <th>Type</th>
              <th>Count</th>
              <th>Search</th>
            </tr>
          </thead>
          <tbody>
            {animalsInfos.map((animal) => (
              <AnimalPreview key={animal.type} animal={animal} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
