/* eslint-disable react/prop-types */
export function AnimalPreview({ animal }) {

  return (
          <tr className='animal-preview-tr'>
              <td className='animal-preview-td'>{animal.type}</td>
              <td className='animal-preview-td'>{animal.count}</td>
              <td className='animal-preview-td'><a href={`https://www.google.com/search?q=${animal.type}`}>search</a></td>
          </tr>
);
}