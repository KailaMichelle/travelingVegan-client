const url = `http://localhost:4000/restaurants`
const token = localStorage.getItem('token');

class RestaurantModel {
    static getAllRestaurants = () => {
        return fetch('http://localhost:4000/restaurants')
            .then((response) => response.json())
    }

    static getRestaurantById = (restaurantId) => {
        return fetch(`${url}/${restaurantId}`)
            .then((response) => response.json())
    }

    static createRestaurant = (restaurant) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(restaurant)
        })
            .then((response) => response.json())
    }


    // / static deleteRestaurant = (restaurantId) => {
        //     return fetch(`${url}/${restaurantId}`, {
        //         method: 'DELETE',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': token,
        //         },
        //     })
        //     .then((response) => response.json())
        // } 
    // }
}

export default RestaurantModel;