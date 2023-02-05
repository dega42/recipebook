import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function IngredientList(props) {
    return (
        <li className='item-list item-list-ingredient'>
            <button className='btn btn-icon' onClick={props.removeIngredient} data-id={props.id}><FontAwesomeIcon icon={faTrash} /></button>
            {props.name}
        </li>
    )
}

export default IngredientList;

