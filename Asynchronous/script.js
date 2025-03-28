'use strict';
//
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


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


// const request = fetch('https://restcountries.com/v2/name/usa')
//
// function getCountryData(country) {
//     getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//         .then(data => {
//             renderCountry(data[0])
//             if (!data[0].borders?.[0]) throw new Error ('No neighbour')
//             return getJSON(
//                 `https://restcountries.com/v2/alpha/${data[0].borders?.[0]}`,
//                 'Country not found')
//         })
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => console.error(err.message))
//         .finally(() => console.log('Always runs'))
// }
//
//
// btn.addEventListener('click', () => {
//     getCountryData('australia')
// });
//
//
// function getJSON(url, errMessage = 'Something went wrong') {
//     return fetch(url).then(resp => {
//         if (!resp.ok) throw new Error(`${errMessage} ${resp.status}` )
//         return resp.json()
//     })
// }
//
//
// function whereAmI(lat, lng) {
//
//     fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
//         .then(response => {
//             if (!response.ok) throw new Error(response.statusText);
//             return response.json()
//         })
//         .then(data => {
//                 console.log(`You are in ${data.city}, ${data.countryName}`)
//                 return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
//             })
//         .then(res => {
//             if (!res.ok) throw new Error(`Country not found (${res.status})`);
//             return res.json();
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(err => console.log(err.message))
// }

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log(1)
//
// const lotteryPromise =  new Promise(function(resolve, reject) {
//     console.log(2)
//     setTimeout(function() {
//         if (Math.random() >= 0.5) {
//             resolve('You win :)')
//         } else {
//             reject(new Error('You lost :('))
//         }
//     }, 2000)
// })
// console.log(3)
//
//
// lotteryPromise
//     .then(res => console.log(res))
//     .catch(err => console.log(err.message))


// function wait(seconds) {
//     return new Promise(resolve => {
//         setTimeout(resolve, seconds * 1000)z
//     })
// }
//
// wait(2)
//     .then(() => {
//     console.log('wait 2 seconds...')
//     return wait(1)
//     })
//     .then(() => console.log('wait 1 second...'))



// navigator.geolocation.getCurrentPosition(
//     (position) => {
//     console.log(position)
// },
//     (err) => {
//         console.log(err)
//     })

//
// function getPosition() {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject)
//     })
// }
//
// getPosition().then(pos => console.log(pos))


// PART 1
// 1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
//
//     PART 2
// 2. Consume the promise using .then and also add an error handler;
// 3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
// 4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
// 5. After the second image has loaded, pause execution for 2 seconds again;
// 6. After the 2 seconds have passed, hide the current image.
//
//     TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
//

// const imgContainer = document.querySelector('.images')
// let image
//
//
// function createImage(imgPath) {
//     return new Promise((resolve, reject) => {
//         const img = document.createElement('img');
//         img.src = imgPath;
//
//         img.addEventListener('error', (event) => {
//             reject(new Error('Image not found'))
//         })
//
//         img.addEventListener('load', (event) => {
//             imgContainer.append(img)
//             resolve(img)
//         })
//     })
// }
//
//
// function wait(seconds){
//     return new Promise(resolve => setTimeout(resolve, 1000 * seconds))
// }
//
// createImage('./img/img-1.jpg')
//     .then(img => {
//         image = img
//         return wait(2)
//     })
//     .then(() => {
//         image.style.display = 'none'
//         return createImage('./img/img-2.jpg')
//     }).then(img => {
//         image = img
//         return wait(2)
//     })
//     .then(() => image.style.display = 'none')
//     .catch(err => console.log(err))


function getPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}


// const locationResp = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)

// const countryResp = await fetch(`https://restcountries.com/v2/name/${locationBody.countryName}`);


// async function whereAmI() {
//
//     try {
//
//         const pos = await getPosition();
//         const {latitude: lat, longitude: lng} = pos.coords;
//
//         const locationResp = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
//         if (!locationResp.ok) throw new Error('Data fetch failed');
//         const locationBody = await locationResp.json()
//
//         const countryResp = await fetch(`https://restcountries.com/v2/name/non_existed_country`);
//         if (!countryResp.ok) throw new Error('Country not found');
//         const countryBody = await countryResp.json();
//
//         renderCountry(countryBody[0])
//         return `You re in ${locationBody.principalSubdivision}`
//
//     } catch(err) {
//         console.log(err.message)
//     }
// }
//
// console.log(whereAmI())


function getJSON(url, errMessage = 'Something went wrong') {
    return fetch(url).then(resp => {
        if (!resp.ok) throw new Error(`${errMessage} ${resp.status}` )
        return resp.json()
    })
}
//
//
// async function get3Countries(c1, c2, c3) {
//
//     try {
//         // const data1 = await getJSON(`https://restcountries.com/v2/name/${c1}`)
//         // const data2 = await getJSON(`https://restcountries.com/v2/name/${c2}`)
//         // const data3 = await getJSON(`https://restcountries.com/v2/name/${c3}`)
//
//         const data = await Promise.all([
//             getJSON(`https://restcountries.com/v2/name/${c1}`),
//             getJSON(`https://restcountries.com/v2/name/${c2}`),
//             getJSON(`https://restcountries.com/v2/name/${c3}`)
//             ])
//     }
//     catch(err) {
//         console.log(err)
//     }
// }
//
//
// get3Countries('canada', 'ukraine', 'usa')

//
// (async function() {
//     const res = await Promise.race([
//         getJSON(`https://restcountries.com/v2/name/usa`),
//         getJSON(`https://restcountries.com/v2/name/ukraine`),
//         getJSON(`https://restcountries.com/v2/name/mexico`)
//     ]);
//     console.log(res[0])
// })()


function timeout(sec) {
    return new Promise((_, reject) =>
        setTimeout(() =>
            reject(new Error('request took too long')), sec * 1000))
}

Promise.race([
    getJSON(`https://restcountries.com/v2/name/usa`),
    timeout(0.1)
])
    .then(res => console.log(res[0]))
    .catch(err => console.error(err))

