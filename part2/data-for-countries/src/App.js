import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
// import Filter from './components/Filter';
// import DisplayCountries from './components/DisplayCountries';

function App() {
  const [ countries, setCountries ] = useState([])
  const [ filteredCountries, setFilteredCountries ] = useState([])
  const [ search, setSearch ] = useState('')

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
                                altSpellings.some(spelling => spelling.toLowerCase().includes(search.toLowerCase() ))
      )
      setFilteredCountries(filteredCountryList)
  }, [search, countries])

  const handleOnChange = (event) => {
    setSearch(event.target.value)
  }
  
  // const filterCountries = countries.filter(country => country.name.toLowerCase().includes( search.toLowerCase() )).map(filteredCountries => (
  //   <div>{filteredCountries.name}</div>
  // ))
  // console.log(filterCountries);
  // const displayCountries = filterCountries.map((country, index) => <div key={index}>{country.name}</div>)

  return (
    <div className="app">
      <div>
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
            {filteredCountries.map(country => (<div>{country.name}</div>))}
          </div>
      }
      { filteredCountries.length === 1 && filteredCountries.map(country => 
                <div>
                  <h2>{country.name}</h2>
                  <div>Capital {country.capital}</div>
                  <div>Population {country.population}</div>
                  <h3>Languages</h3>
                  {filteredCountries[0].languages.map(languages =>
                    <li>
                      <ul>{languages.name}</ul>
                    </li>
                  )}
                  <img src={country.flag} alt={`flag of ${country}`} />
                </div>
                )      
      }
    </div>
  );
}

export default App;
