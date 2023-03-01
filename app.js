const lodeData = () => {
    const searchField = document.getElementById('input-field');
    const searchValue = searchField.value ;
    const url = `https://restcountries.com/v3.1/name/${searchValue}`
    fetch(url).then(res => res.json()).then(data => displayData(data[0]))
}
const displayData = (data) => {
    const {name,capital,continents,population,startOfWeek,flags,currencies,maps} = data
    const displayContainer = document.getElementById('country-container');
    displayContainer.innerHTML = ''
    const div = document.createElement('div');
    div.innerHTML = `
        <div>
            <div>
            <img style="height: 160px;width: 250px" src="${flags.png}">
            </div>
            <div>
            <h style="font-size:25px;text-align-center; font-weight:bold;">${name.common}</h>
            </div>

            <p><b>Capital</b> : ${capital[0]}</p>
            <p><b>Continent</b> : ${continents[0]}</p>
            <p><b>Population</b> : ${population}</p>
            <p><b>OffDay</b> : ${startOfWeek}</p>
        </div>
    `;
    displayContainer?.appendChild(div);

}
