const DisplayCountries = ({ countries }) => {
    return (
        <div>
           {countries.map((country) => {
               return (
                   <div key={country.name}>{country.name}</div>
               )
           })} 
        </div>
    )
}

export default DisplayCountries
