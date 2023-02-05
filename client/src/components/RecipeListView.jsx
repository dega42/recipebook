import { Link } from 'react-router-dom';

function RecipeListView(props) {
    const { id, name, slug, times, description } = props;
    return (
        <li>
            <div className='list-heading'>
                <h2>{name} ({times})</h2>
                <div className="btn-group">
                    <Link to={'/' + slug} className="btn" id={id}>View</Link>
                    <Link to={'/' + slug + '/edit'} className="btn" id={id}>Edit</Link>
                </div>
            </div>
            <span>{description}</span>
        </li>
    )
}

export default RecipeListView;