import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import Highlight from '../../../Components/Highlight/Highlight';
import AdsSection from '../../../Components/AdsSection/AdsSection';
import Sylhet from '../../../Components/Sylhet/Sylhet';
import Districts from '../../../Components/Districts/Districts';
import InsideOutSideNews from '../../../Components/InsideOutsideNews/InsideOutSideNews';
import SportsNews from '../../../Components/SportsNews/SportsNews';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Highlight></Highlight>
            <AdsSection></AdsSection>
            <Sylhet></Sylhet>
            <Districts></Districts>
            <InsideOutSideNews></InsideOutSideNews>
            <SportsNews></SportsNews>
            <Footer></Footer>
        </div>
    );
};

export default Home;