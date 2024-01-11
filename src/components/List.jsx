import Post from './Post';
import classes from './List.module.css';
import NewPost from './NewPost';
import Modal from './Modal';
import { useState } from 'react';

function List() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(true);

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    const changeBodyHandler = (e) => {
        setEnteredBody(e.target.value);
    };
    const changeAuthorHandler = (e) => {
        setEnteredAuthor(e.target.value);
    };
    return (
        <>
            {isModalVisible && (
                <Modal onClose={handleModalClose}>
                    <NewPost
                        onBodyChange={changeBodyHandler}
                        onAuthorChange={changeAuthorHandler}
                    />
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post
                    author={enteredAuthor}
                    body={enteredBody}
                />

                <Post
                    author='Sandra'
                    body='I see you'
                />
            </ul>
        </>
    );
}

export default List;
