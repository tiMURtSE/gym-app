import React from 'react';
import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (page: SelectedPage) => void,
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
    const lowerCasePage = page.toLowerCase().replaceAll(' ', '') as SelectedPage;
    
    return (
        <AnchorLink
            className={`${lowerCasePage === selectedPage ? 'text-primary-500' : ''} transition duration-150 hover:text-primary-300`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

export default Link;