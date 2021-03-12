const Filter = ({ countries, search }) => {
        
    const handleOnChange = countries.filter(country => country.name.toLowerCase().includes( search.toLowerCase() ))

    return (
        <div>
           find countries
           <div>
            <input
                    onChange={handleOnChange}
                    placeholder="type in a country"
            />
           </div>
        </div>
    )
}

export default Filter

// basic info to show about a country result
// country.capital
// country.population
// country.languages.name
// country.flag