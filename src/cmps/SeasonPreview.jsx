/* eslint-disable react/prop-types */

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const seasons = ["Spring", "Summer", "Autumn","Winter"];
const seasonImages = ["spring.png", "summer.png", "autumn.png","winter.png"];

export function SeasonPreview({ isDark }) {

    const d = new Date();
    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let season = seasons[(Math.floor(d.getMonth()/4))]
    let seasonImage = seasonImages[(Math.floor(d.getMonth()/4))]
    let classNameParameter = isDark ? "season-preview-dark" : "season-preview-light"

    return (
        <div className={`${classNameParameter}`}>
            <p className='season-p-dark'>{`${month}`}</p>
            <p className='season-p-dark'>{`${season}`}</p>
            <img src={`./src/assets/${seasonImage}`}/>
            <p className='season-p-dark'>{`${day}`}</p>
        </div>
    )
}