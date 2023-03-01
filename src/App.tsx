import React, { useEffect, useState } from 'react'
import Navbar from '@/scenes/navbar/Navbar';
import { SelectedPage } from './shared/types';

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const navbarBackgroundHandler = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
            } else {
                setIsTopOfPage(false);
            }
        };

        document.addEventListener('scroll', navbarBackgroundHandler);
        return () => document.removeEventListener('scroll', navbarBackgroundHandler);
    }, [isTopOfPage]);
    
    return (
        <div className="App">
            <Navbar 
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage} 
                setSelectedPage={setSelectedPage} 
            />
            <div className='h-[1500px]'></div>
        </div>
    );
};

export default App;
