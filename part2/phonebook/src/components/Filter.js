const Filter = ({ setSearch }) => {
    return (
        <div>
           <div>filter shown with<input onChange={ e => setSearch(e.target.value)}/></div> 
        </div>
    )
}

export default Filter
