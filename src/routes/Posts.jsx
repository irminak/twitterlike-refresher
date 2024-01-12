import { Outlet } from 'react-router-dom';
import List from '../components/List';

function Posts() {
    return (
        <>
            <Outlet />
            <main>
                <List />
            </main>
        </>
    );
}

export default Posts;

export async function loader() {
    const response = await fetch('http://localhost:8080/posts');
    const resData = await response.json();
    return resData.posts;
}
