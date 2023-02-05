import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSort } from '@fortawesome/free-solid-svg-icons'

function DirectionList(props) {
    return (
        <li className='item-list item-list-direction'>
            <button className='btn btn-icon' onClick={props.removeDirection} data-id={props.id}><FontAwesomeIcon icon={faTrash} /></button>
            <button className='btn btn-icon'><FontAwesomeIcon icon={faSort} /></button>
            {props.name}
        </li>
    )
}

export default DirectionList;

