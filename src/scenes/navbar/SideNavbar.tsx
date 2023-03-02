import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import { pageList } from '@/shared/consts';

type Props = {
    setIsMenuToggled: (value: boolean) => void,
    selectedPage: SelectedPage,
    setSelectedPage: (page: SelectedPage) => void,
};

const SideNavbar = ({ setIsMenuToggled, selectedPage, setSelectedPage }: Props) => {
    return (
        <div className='fixed right-0 bottom-0 z-20 w-[300px] h-full bg-primary-100 drop-shadow-xl'>
            <div className='flex justify-end p-12'>
                <button className='cursor-pointer' onClick={() => setIsMenuToggled(false)}>
                    <XMarkIcon className='w-10 h-10 text-gray-400 cursor-pointer' />
                </button>
            </div>

            <div className='flex flex-col gap-y-10 ml-12 text-2xl'>
                {pageList.map(page =>
                    <Link
                        page={page} 
                        selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage}
                        key={page}
                    />    
                )}
            </div>
        </div>
    );
};

export default SideNavbar;