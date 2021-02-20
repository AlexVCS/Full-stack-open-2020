import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [ countries, setCountries ] = useState([])

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

  return (
    <div className="app">
      <div>
        find countries <input placeholder="type in a country" />
      </div>
    </div>
  );
}

export default App;
