'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}


function renderCountry(data, className = '') {
    const html = `
      <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${+(data.population / 1000000).toFixed(2)} million people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

// function getCountryAndNeighbour(country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();
//
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText)
//         renderCountry(data)
//
//         const neighbour = data.borders?.[0]
//         if (!neighbour) return;
//
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//         request2.send();
//
//         request2.addEventListener('load', function() {
//             const data2 = JSON.parse(this.responseText)
//             renderCountry(data2, 'neighbour')
//         })
//     })
// }
//
// getCountryAndNeighbour("usa")


//
// const request = fetch('https://restcountries.com/v2/name/usa')
// console.log(request)

function getCountryData(country) {
    getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
        .then(data => {
            renderCountry(data[0])
            if (!data[0].borders?.[0]) throw new Error ('No neighbour')
            return getJSON(
                `https://restcountries.com/v2/alpha/${data[0].borders?.[0]}`,
                'Country not found')
        })
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => console.error(err.message))
        .finally(() => console.log('Always runs'))
}


btn.addEventListener('click', () => {
    getCountryData('australia')
});


function getJSON(url, errMessage = 'Something went wrong') {
    return fetch(url).then(resp => {
        if (!resp.ok) throw new Error(`${errMessage} ${resp.status}` )
        return resp.json()
    })
}