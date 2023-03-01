import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (page: SelectedPage) => void,
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const flexBetween = 'flex items-center justify-between';
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    const navbarBackground = (isTopOfPage) ? '' : 'bg-primary-100 drop-shadow';
    
    return (
        <div className={`${navbarBackground} fixed top-0 left-0 right-0 z-10`}>
            <div className='max-w-7xl mx-auto'>
                <nav className={`${flexBetween} px-8 py-6`}>
                    <img src={Logo} alt="logo" />

                    {isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full ml-14`}>
                            <div className={`${flexBetween} gap-x-8`}>
                                <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            </div>

                            <div className={`${flexBetween} gap-x-8`}>
                                <a href="#">Sign Up</a>
                                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                            </div>
                        </div>
                    ) : (
                        <button 
                            className='p-2 bg-secondary-500 rounded-full'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className='w-10 h-10 text-white' />
                        </button>
                    )}

                    {!isAboveMediumScreens && isMenuToggled && (
                        <div className='fixed right-0 bottom-0 z-20 w-[300px] h-full bg-primary-100 drop-shadow-xl'>
                            <div className='flex justify-end p-12'>
                                <button className='cursor-pointer' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <XMarkIcon className='w-10 h-10 text-gray-400 cursor-pointer' />
                                </button>
                            </div>

                            <div className='flex flex-col gap-y-10 ml-12 text-2xl'>
                                <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;