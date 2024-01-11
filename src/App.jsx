import { useState } from 'react';
import List from './components/List';
import MainHeader from './components/MainHeader';

function App() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModal = () => {
        isModalVisible ? setIsModalVisible(false) : setIsModalVisible(true);
    };
    return (
        <>
            <MainHeader onCreatePost={handleModal} />
            <main>
                <List
                    isPosting={isModalVisible}
                    onStopPosting={handleModal}
                />
            </main>
        </>
    );
}

export default App;
