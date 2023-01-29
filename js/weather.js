const APIKey = 'dccAZroQhPsVaVK683grCDLTqHsyt9WM';
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityURL = cityName => `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;
const getConditionsURL = cityKey => `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`;

const fetchData = async url => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error("Não foi possível obter os dados")
    }
    return response.json()
  } catch ({ name, message }) {
    alert(`${name}: ${`message`}`)
  }
}

const getCityData = city => fetchData(getCityURL(city))
const getCityWeather = cityKey => fetchData(getConditionsURL(cityKey))