const formData = document.querySelector('form');
const cardInfo = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icons = document.querySelector('.icon img');

const updateUI = city => {
// const cityDetails = city.cityDetails;
// const weatherDetails = city.weatherDetails;

// destructuring
const {cityDetails,weatherDetails} = city;

const myTemplate = `  <h5 class="my-3">${cityDetails.EnglishName}</h5>
<div class="my-3">${weatherDetails.WeatherText}</div>
<div class="display-4 text-center">
    <span>${weatherDetails.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
</div>`;
details.innerHTML = myTemplate;

// update image source

const iconSrc = `img/icons/${weatherDetails.WeatherIcon}.svg`;
icons.setAttribute('src',iconSrc);
let timeSrc = null;
if(weatherDetails.IsDayTime){
    timeSrc = 'img/day.svg';
}else{
    timeSrc = 'img/night.svg';
}

time.setAttribute('src',timeSrc);

if(cardInfo.classList.contains('d-none')){
    cardInfo.classList.remove('d-none');
}
};


const updateCity = async(city) => {

    const cityDetails = await getCity(city);
    const weatherDetails = await getWeather(cityDetails.Key);

    // object shorthand notation
    return {cityDetails,weatherDetails};
};

formData.addEventListener('submit', e => {
    e.preventDefault();
    const userInput = formData.city.value.trim();
    formData.reset();

    updateCity(userInput)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
})