import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ filteredCountries, setFilteredCountries ] = useState([])
  const [ search, setSearch ] = useState('')
  const [ weather, setWeather ] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    console.log(`Searching for ${search}`)

    const filteredCountryList = countries.filter(({ name, altSpellings }) =>
                                name.toLowerCase().includes(search.toLowerCase() )||
                                altSpellings.some(spelling => spelling.toLowerCase().startsWith(search.toLowerCase() ))
      )
      setFilteredCountries(filteredCountryList)
  }, [search, countries])

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${encodeURI}${search}`)
      .then (response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setWeather(response.data)
      })
  }, [search, countries])

  const handleOnChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="app">
      <div>
        find countries
        <input
          placeholder="type in a country"
          onChange={(event) => {handleOnChange(event)}}
        />
      </div>
      { filteredCountries.length >= 10 &&
          <div>
            Too many matches, specify another filter
          </div>
      }
      { filteredCountries.length > 1 && filteredCountries.length <= 10 &&
          <div>
            {filteredCountries.map(country => (
              <div key={country.name}>
                {country.name}
                 <button onClick={() => setSearch(country.name)}>show</button>
              </div>
              ))}
          </div>
      }
      { filteredCountries.length === 1 && filteredCountries.map(country => 
                <div key={country.name}>
                  <h2>{country.name}</h2>
                  <div>Capital {country.capital}</div>
                  <div>Population {country.population}</div>
                  <h3>Languages</h3>
                  {filteredCountries[0].languages.map(languages =>
                    <li key={languages.name} className="languages-list">
                      <ul className="language">{languages.name}</ul>
                    </li>
                  )}
                  <img src={country.flag} className="flag" alt='country flag' />
                      <h3>Weather in {country.capital}</h3>
                      <div className="weather-info">
                        <div>
                          <strong>temperature: </strong> {weather.current.temperature} Celcius
                        </div>
                        <img src={weather.current.weather_icons} className="weather-icon" alt="Current weather icon"/>
                        <div>
                          <strong>wind:</strong> {weather.current.wind_speed} mph direction {weather.current.wind_dir}
                        </div>
                      </div>
                </div>
                )      
      }
    </div>
  );
}

export default App;