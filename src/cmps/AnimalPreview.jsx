/* eslint-disable react/prop-types */
// import {AnimalPreview} from './AnimalPreview'

export function AnimalPreview({ animal }) {

  return (
          <tr>
              <td>{animal.type}</td>
              <td>{animal.count}</td>
              <td><a href={`https://www.google.com/search?q=${animal.type}`}>search</a></td>
          </tr>
);
}