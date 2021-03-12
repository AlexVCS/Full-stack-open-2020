import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
// import Filter from './components/Filter';
// import DisplayCountries from './components/DisplayCountries';

function App() {
  const [ countries, setCountries ] = useState([])
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

  const handleOnChange = (event) => {
    setSearch(event.target.value)
  }
  
  const filterCountries = countries.filter(country => country.name.toLowerCase().includes( search.toLowerCase() )).map(filteredCountries => (
    <div>{filteredCountries.name}</div>
  ))
  console.log(filterCountries);
  // const displayCountries = filterCountries.map((country, index) => <div key={index}>{country.name}</div>)

  return (
    <div className="app">
      <div>
        <input
          placeholder="type in a country"
          onChange={(event) => {handleOnChange(event)}}
        />
      </div>
      <div>
        {filterCountries}
      </div>
    </div>
  );
}

export default App;
