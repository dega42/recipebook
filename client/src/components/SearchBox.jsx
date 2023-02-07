function SearchBox(props) {
    return (
        <div>
            <form>
                <input onChange={props.search} />
            </form>
        </div>
    )
}

export default SearchBox;