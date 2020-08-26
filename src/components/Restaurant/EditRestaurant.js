// import React, { Component } from 'react';
// import axios from 'axios';
// import RestaurantModel from '../../models/RestaurantModel';

// class EditForm extends Component {
//     state = {
//         name: this.props.restaurant.name,
//         location: this.props.restaurant.location,
//     }
    

//     componentDidMount(){
//         RestaurantModel.getRestaurantById(restaurant)
//             .then((result) => {
//                 console.log(result)
//                 // this.setState({restaurant: result});
//             })
//             .catch((err) => console.log(err))
//     }
//     // componentDidMount(){
//     //     // fetch('http://localhost:4000/restaurants/'+this.props.restaurant._id)
//     //     // .then((response) => {
//     //         this.setState({
//     //             name: this.props.restaurant.name,
//     //             location: this.props.restaurant.location,
//     //         });
//     //         console.log(this.state)
//     // //     })
//     // //     .catch((err) => console.log(err))
//     // }
    

//     onChange(e) {
//         this.setState({
//         [e.target.name]: e.target.value
//         });
//         console.log(this.state)
//     }

//     // onChangeLocation(e){
//     //     this.setState({
//     //         location: e.target.value
//     //     });
//     // }

//     onSubmit = (e) => {
//         e.preventDefault();

//         const restaurant = {
//             name: this.state.name,
//             location: this.state.location,
//         };

//         console.log(restaurant);

//         this.props.updateRestaurant()
//     }

//     render(){
//         console.log(this.state)
//         return(
//             <div style={this.props.style}>
//                 <form onSubmit={this.onSubmit}>
//                     <input type="text"
//                     autoFocus={this.props.autoFocus}
//                     onChange={this.onChangeLocation}
//                     placeholder='edit location'
//                     name='location'
//                     defaultValue={this.state.location}
//                     />
//                     <button type='submit'>Save</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default EditForm;







// // import React, { Component } from 'react';

// // class EditForm extends Component {
// //     // state = {
// //     //     name: '',
// //     //     // restaurant: {
// //     //     //     // _id: this.props.restaurant._id,
// //     //     //     name: '',
// //     //     // },
// //     // }

// //     // onChange = (e) => {
// //     //     this.setState({
// //     //         name: e.target.value
// //     //     });
// //     // }

// //     // onSubmit = (e) => {
// //     //     e.preventDefault();
// //     //     const restaurant = this.props.restaurant;
// //     //     restaurant.body = this.state.restaurant;
// //     //     this.props.updateRestaurant(restaurant);
// //     //     this.setState({restaurant: {}});
// //     //     this.props.toggleBodyForm();
// //     // };

// //     render(){
// //         console.log(this.props.restaurant)
// //         return(
// //             <div style={this.props.style}>
// //                 {/* <form onSubmit={this.onSubmit}>
// //                     <input type="text"
// //                     autoFocus={this.props.autoFocus}
// //                     onChange={this.onChange}
// //                     placeholder='edit restaurant'
// //                     value={this.state.restaurant}/>
// //                     <button type='submit'>Save</button>
// //                 </form> */}
// //             </div>
// //         )
// //     }
// // }

// // export default EditForm;