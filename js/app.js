const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"')
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"')
let timeIconContainer = document.querySelector('[data-js="time-icon"')

const updateWeatherCard = (cityName, weatherText, temperatureValue, isDayTime, weatherIcon) => {
  if (cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none')
  }
  cityNameContainer.textContent = cityName
  cityWeatherContainer.textContent = weatherText
  cityTemperatureContainer.textContent = temperatureValue
  timeImg.src = isDayTime ? './src/day.svg' : './src/night.svg'
  timeIconContainer.innerHTML = `<img src="./src/icons/${weatherIcon}.svg"></img>`
}

cityForm.addEventListener('submit', async event => {
  event.preventDefault()

  const inputValue = event.target.city.value
  const [{ Key, LocalizedName }] = await getCityData(inputValue)
  const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key)

  updateWeatherCard(LocalizedName, WeatherText, Temperature.Metric.Value, IsDayTime, WeatherIcon)
  cityForm.reset()
})