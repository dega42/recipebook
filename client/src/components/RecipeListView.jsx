import { Link } from 'react-router-dom';

function RecipeListView(props) {
    const { id, name, slug, times, description } = props;
    return (
        <li className='recipe-list-item'>
            <div className='recipe-list-item-heading'>
                <h2><Link to={'/' + slug} id={id}>{name}</Link></h2>
                {times}
            </div>
            <span>{description}</span>
        </li>
    )
}

export default RecipeListView;