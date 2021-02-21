const Filter = ({ setSearch }) => {
    return (
        <div>
           find countries
           <div>
            <input
                    onChange={e => setSearch(e.target.value)}
                    placeholder="type in a country"
            />
           </div>
        </div>
    )
}

export default Filter
