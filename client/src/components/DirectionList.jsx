import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSort } from '@fortawesome/free-solid-svg-icons'

function DirectionList(props) {
    return (
        <li>
            <div className="item-group">
                 <button className='btn' onClick={props.removeDirection} data-id={props.id}><FontAwesomeIcon icon={faTrash} /></button>
                 <button className='btn'><FontAwesomeIcon icon={faSort} /></button>                
                {props.name}
            </div>
        </li>
    )
}

export default DirectionList;

