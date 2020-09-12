// const url = `http://localhost:4000/restaurants`
const url = `${process.env.REACT_APP_API}/restaurants`

class RestaurantModel {
    static getAllRestaurants = () => {
        return fetch(`${url}/restaurants`)
            .then((response) => response.json())
    }

    static getRestaurantById = (restaurantId) => {
        return fetch(`${url}/${restaurantId}`)
            .then((response) => response.json())
    }

    static createRestaurant = (restaurant) => {
        const token = localStorage.getItem('token');
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

    static updateRestaurant = (restaurant, id) => {
        const token = localStorage.getItem('token');
        return fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(restaurant)
        })
            .then((response) => response.json())
    }


    static deleteRestaurant = (restaurantId) => {
        const token = localStorage.getItem('token');
        return fetch(`${url}/${restaurantId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },
            })
            .then((response) => response.json())
        } 

}

export default RestaurantModel;