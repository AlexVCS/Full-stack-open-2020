import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Filter from './components/Filter';
import DisplayCountries from './components/DisplayCountries';

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

  const findCountries = countries.filter(country => {
    return country.name.toLowerCase().includes( search.toLowerCase() )
  })

  return (
    <div className="app">
      <div>
        <Filter setSearch={setSearch} />
      </div>
      <div>
        <DisplayCountries findCountries={findCountries} />
      </div>
    </div>
  );
}

export default App;
