'use strict';


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');



class App {
    #map
    #mapEvent

    constructor() {
        this._getPosition()

        form.addEventListener('click', this._newWorkout.bind(this))
        inputType.addEventListener('change', this._toggleEvaluationField)
    }

    _getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),
                function() {alert('Could not get your location');
            })
        }
    }

    _loadMap(position) {
        const {latitude, longitude} = position.coords;
        const coords = [latitude, longitude];
        this.#map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
            minZoom: 0, maxZoom: 20, attribution:
                '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> ' +
                '&copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> ' +
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            ext: 'png'
        }
        ).addTo(this.#map);

        this.#map.on('click', this._showForm.bind(this));
    }

    _showForm(mapE) {
        this.#mapEvent = mapE
        form.classList.remove('hidden')
        inputDistance.focus()
    }

    _toggleEvaluationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e) {
        e.preventDefault();
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''
        const {lat, lng} = this.#mapEvent.latlng;

        L.marker([lat, lng]).addTo(this.#map).bindPopup(
            L.popup({maxWidth: 250,  minWidth: 100, autoClose: false, closeOnClick: false, className: 'running-popup',}))
            .setPopupContent('Label').openPopup();
    }
}

const app = new App();
