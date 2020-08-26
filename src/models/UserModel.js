const url = `http://localhost:4000/profiles`

class UserModel {
    static getAllUsers = () => {
        return fetch('http://localhost:4000/profiles')
            .then((response) => response.json())
    }

    static getUserById = (userId) => {
        return fetch(`${url}/${userId}`)
            .then((response) => response.json())
    }

    static updateFavorite = (restaurant, id) => {
        const token = localStorage.getItem('token');
        return fetch(`${url}/${id}/favorite`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(restaurant)
        })
            .then((response) => response.json())
    }

    static removeFavorite = (restaurant, id) => {
        const token = localStorage.getItem('token');
        return fetch(`${url}/${id}/removefavorite`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(restaurant)
        })
            .then((response) => response.json())
    }

    // static updateFavorite = (userId) => {
    //     let request = axios.put(`${url}/${userId}`);
    //     return request;
    // };

    // static getRestaurants = (userId) => {
    //     return fetch(`${url}/${userId}/restaurants`)
    //     .then((response) => response.json())
    // }

    // static createUser = (restaurant) => {
    //     return fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             // 'Authorization': token,
    //         },
    //         body: JSON.stringify(restaurant)
    //     })
    //         .then((response) => response.json())
    // }

    // static createUser = (restaurant) => {
    //     return fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             // 'Authorization': token,
    //         },
    //         body: JSON.stringify(restaurant)
    //     })
    //         .then((response) => response.json())
    // }
}

export default UserModel;