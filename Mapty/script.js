'use strict';


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);

    constructor(coords, distance, duration) {
        this.coords = coords;
        this.distance = distance;
        this.duration = duration;
    }
}


class Running extends Workout {
    type = 'running';

    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace()
    }

    calcPace() {
        this.pace = this.duration / this.distance;
    }
}


class Cycling extends Workout {
    type = 'cycling';

    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }

    calcSpeed() {
        this.speed = this.distance / (this.duration / 60);
    }
}


class App {
    #map;
    #mapEvent;
    #workouts = [];

    constructor() {
        this._getPosition()

        form.addEventListener('submit', this._newWorkout.bind(this))
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

        const validInput = (...inputs) => inputs.every(input => Number.isFinite(input))
        const isAllPositiveNumbers = (...inputs) => inputs.every(input => input > 0)

        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const {lat, lng} = this.#mapEvent.latlng;
        let workout;

        if (type === 'running') {
            const cadence = +inputCadence.value;
            if (!validInput(distance, duration, cadence) ||
                !isAllPositiveNumbers(distance, duration, cadence))
                return alert ('Inputs have to be positive numbers')

            workout = new Running([lat, lng], distance, duration, cadence);
        }

        if (type === 'cycling') {
            const elevation  = +inputElevation.value;
            if (!validInput(distance, duration, elevation) ||
                !isAllPositiveNumbers(distance, duration))
                return alert ('Inputs have to be positive numbers')

            workout = new Cycling([lat, lng], distance, duration, elevation);
        }

        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''
        this.#workouts.push(workout);
        this._renderMarker(workout);
    }

    _renderMarker(workout) {
        L.marker(workout.coords)
            .addTo(this.#map)
            .bindPopup(L.popup({maxWidth: 250,  minWidth: 100, autoClose: false, closeOnClick: false, className: `${workout.type}-popup`,}))
            .setPopupContent(workout.type)
            .openPopup();
    }

    _renderWorkout(workout) {

    }
}

const app = new App();
