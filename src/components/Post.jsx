import classes from './Post.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ author, body, id }) {
    return (
        <li className={classes.post}>
            <Link to={id}>
                <p className={classes.author}>{author}</p>
                <p className={classes.text}>{body}</p>
            </Link>
        </li>
    );
}
Post.propTypes = {
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default Post;
