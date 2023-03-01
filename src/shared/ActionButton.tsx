import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';

type Props = {
    children: React.ReactNode,
    setSelectedPage: (page: SelectedPage) => void,
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
    return (
        <AnchorLink
            className='bg-secondary-500 rounded-md py-2 px-10 hover:bg-primary-500 hover:text-white transition duration-150'
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    );
};

export default ActionButton;