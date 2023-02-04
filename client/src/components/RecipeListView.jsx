import { Link } from 'react-router-dom';

function RecipeListView(props) {
    return (
        <li>
            <div className='list-heading'>
                <h2>{props.name} ({props.times})</h2>
                <div className="btn-group">
                    <Link to={'/' + props.slug} className="btn" id={props.id}>View</Link>
                    <Link to={'/' + props.slug + '/edit'} className="btn" id={props.id}>Edit</Link>
                </div>
            </div>
            <span>{props.description}</span>
        </li>
    )
}

export default RecipeListView;