function Checklist(props) {
    return (
        <li>
            <input type="checkbox" /> <span>{props.name}</span>
        </li>
    )
}

export default Checklist;