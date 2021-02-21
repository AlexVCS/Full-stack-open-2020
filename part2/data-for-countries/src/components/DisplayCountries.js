const DisplayCountries = ({ findCountries }) => {
    return (
        <div>
           {findCountries.map((country, index) => {
               return (
               <div key={index}>{country.name}</div>
               )
           })} 
        </div>
    )
}

export default DisplayCountries
