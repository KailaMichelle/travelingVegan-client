import React from 'react';
import Header from './Header/Header';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Newsletter from './Newsletter/Newsletter';
import Contact from './Contact/Contact';


function Home(){
    return(
        <div>
            <Header />
            <About />
            <Gallery />
            <Newsletter />
            <Contact />
        </div>
    )
}

export default Home;