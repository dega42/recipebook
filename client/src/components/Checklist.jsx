function Checklist(props) {
    return (
        <li className="checklist-item">
            <input type="checkbox" /> <span>{props.name}</span>
        </li>
    )
}

export default Checklist;