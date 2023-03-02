import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import SideNavbar from './SideNavbar';
import { pageList } from '@/shared/consts';

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (page: SelectedPage) => void,
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    const flexBetween = 'flex items-center justify-between';
    const navbarBackground = (isTopOfPage) ? '' : 'bg-primary-100 drop-shadow';
    
    return (
        <header className={`${navbarBackground} fixed top-0 left-0 right-0 z-10`}>
            <div className='max-w-7xl mx-auto'>
                <div className={`${flexBetween} px-8 py-6`}>
                    <a href="#">
                        <img src={Logo} alt="logo" />
                    </a>

                    {isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full ml-14`}>
                            <nav className={`${flexBetween} gap-x-8`}>
                                {pageList.map(page =>
                                    <Link
                                        page={page} 
                                        selectedPage={selectedPage} 
                                        setSelectedPage={setSelectedPage}
                                        key={page}
                                    />    
                                )}
                            </nav>

                            <div className={`${flexBetween} gap-x-8`}>
                                <a href="#">Sign Up</a>
                                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                            </div>
                        </div>
                    ) : (
                        <button 
                            className='p-2 bg-secondary-500 rounded-full'
                            onClick={() => setIsMenuToggled(true)}
                        >
                            <Bars3Icon className='w-10 h-10 text-white' />
                        </button>
                    )}

                    {!isAboveMediumScreens && isMenuToggled && (
                        <SideNavbar
                            setIsMenuToggled={setIsMenuToggled} 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;