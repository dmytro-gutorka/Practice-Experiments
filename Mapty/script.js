'use strict';


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

    _setDescription() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on
        ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }
}


class Running extends Workout {
    type = 'running';

    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this._setDescription();
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
        this._setDescription();
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
        this._getLocalStorage()

        form.addEventListener('submit', this._newWorkout.bind(this))
        inputType.addEventListener('change', this._toggleEvaluationField)
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
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
        this.#workouts.forEach(workout => this._renderMarker(workout));

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
            if (!validInput(distance, duration) ||
                !isAllPositiveNumbers(distance, duration))
                return alert ('Inputs have to be positive numbers')

            workout = new Running([lat, lng], distance, duration, cadence);
        }

        if (type === 'cycling') {
            const elevation  = +inputElevation.value;
            if (!validInput(distance, duration) ||
                !isAllPositiveNumbers(distance, duration))
                return alert ('Inputs have to be positive numbers')

            workout = new Cycling([lat, lng], distance, duration, elevation);
        }

        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''

        this.#workouts.push(workout);
        this._setLocalStorage()
        this._renderWorkout(workout)
        this._renderMarker(workout);

        this._hideForm()
    }

    _renderMarker(workout) {
        L.marker(workout.coords)
            .addTo(this.#map)
            .bindPopup(L.popup({maxWidth: 250,  minWidth: 100, autoClose: false, closeOnClick: false, className: `${workout.type}-popup`,}))
            .setPopupContent(`${workout.type === 'cycling' ? '🚴' : '🏃‍'}${workout.description}`)
            .openPopup();
    }

    _renderWorkout(workout) {
        let html = `

        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'cycling' ? '🚴' : '🏃‍'}️</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
        `

        if (workout.type === 'running') {
            html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`
        }

        if (workout.type === 'cycling') {
            html += `
           <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`
        }

        form.insertAdjacentHTML('afterend', html);
    }

    _hideForm() {
        form.classList.add('hidden');
    }

    _moveToPopup(e) {
        const workoutEl = e.target.closest('.workout');
        if (!workoutEl) return;

        const workout = this.#workouts.find(workout => workout.id === workoutEl.dataset.id);
        this.#map.setView(workout.coords, 15, {animate: true, pan: {duration: 1}})
    }

    _setLocalStorage() {
        localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    }

    _getLocalStorage() {
        const data = JSON.parse(localStorage.getItem('workouts'));

        if (!data) return;
        this.#workouts = data;
        this.#workouts.forEach(workout => this._renderWorkout(workout));
    }

    reset() {
        localStorage.removeItem('workouts');
        location.reload();
    }
}

const app = new App();