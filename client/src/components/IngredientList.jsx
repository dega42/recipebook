import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function IngredientList(props) {
    return (
        <li>
            <div className="item-group" >
                <button className='btn'><FontAwesomeIcon icon={faTrash} /></button>
                {props.name}
            </div>
        </li>
    )
}

export default IngredientList;

