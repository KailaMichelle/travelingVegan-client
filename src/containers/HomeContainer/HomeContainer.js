import React, { Component } from 'react';
import Header from '../../components/Home/Header/Header';
import About from '../../components/Home/About/About';
import Gallery from '../../components/Home/Gallery/Gallery';
import Newsletter from '../../components/Home/Newsletter/Newsletter';
import Contact from '../../components/Home/Contact/Contact';
import RestaurantModel from '../../models/RestaurantModel';


class HomeContainer extends Component{
    state = {
        restaurants: [],
    };

    componentDidMount(){
        RestaurantModel.getAllRestaurants()
            .then((result) => {
                this.setState({restaurants: result});
            })
            .catch((err) => console.log(err))
    }
    
    
    render(){
        return(
            <div>
                <Header />
                <About />
                <Gallery restaurants={this.state.restaurants}/>
                <Newsletter />
                <Contact />
            </div>
        )
    }
}

export default HomeContainer;