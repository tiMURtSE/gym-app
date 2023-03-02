import React, { useEffect, useState } from 'react'
import Navbar from '@/scenes/navbar/Navbar';
import { SelectedPage } from './shared/types';
import Home from './scenes/home/Home';

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const navbarBackgroundHandler = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            } else {
                setIsTopOfPage(false);
            }
        };

        window.addEventListener('scroll', navbarBackgroundHandler);
        return () => window.removeEventListener('scroll', navbarBackgroundHandler);
    }, []);
    
    return (
        <div className="App">
            <Navbar 
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage} 
            />

            <Home 
                setSelectedPage={setSelectedPage}
            />
        </div>
    );
};

export default App;
