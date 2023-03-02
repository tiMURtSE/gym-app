import React from 'react';
import { SelectedPage } from '@/shared/types';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';

type Props = {
    setSelectedPage: (page: SelectedPage) => void,
};

const Home = ({ setSelectedPage }: Props) => {
    return (
        <section className='border-4 border-black md:h-full md:pb-0'>
            <div className='max-w-7xl m-auto md:h-5/6 md:flex items-center justify-center'>
                <div className=''></div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
};

export default Home;