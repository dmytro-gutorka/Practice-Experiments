'use strict';


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');




let map, mapEvent


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){

            const {latitude, longitude} = position.coords;
            const coords = [latitude, longitude];
            map = L.map('map').setView(coords, 13);

            L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
                minZoom: 0, maxZoom: 20, attribution:
                    '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> ' +
                    '&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> ' +
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                ext: 'png'
            }).addTo(map);

            map.on('click', function(mapE) {
                mapEvent = mapE
                form.classList.remove('hidden')
                inputDistance.focus()
            })
        },

        function() {
            alert('Could not get your location');
        })
}



form.addEventListener('submit', function(e) {
    e.preventDefault();
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''
    const {lat, lng} = mapEvent.latlng;

    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(
            L.popup({maxWidth: 250,  minWidth: 100, autoClose: false, closeOnClick: false, className: 'running-popup',}))
        .setPopupContent('Label').openPopup();
})


inputType.addEventListener('change', function(e) {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');

})