import classes from './Post.module.css';
import PropTypes from 'prop-types';

function Post(props) {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </li>
    );
}
Post.propTypes = {
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default Post;
