function SearchBox(props) {
    return (
        <div>
            <form onSubmit={props.filterBySearch}>
                <input
                type='text'
                onChange={props.filterBySearch}
                placeholder='Search recipe'
                 />
            </form>
        </div>
    )
}

export default SearchBox;