const DisplayCountries = ({ countries, search }) => {
    const showCountries = countries.filter(country => country.name.toLowerCase().includes( search.toLowerCase() ))
    
    return (
        <div>
           yeah
        </div>
    )
}

export default DisplayCountries

// country.name.toLowerCase().includes( search.toLowerCase() )