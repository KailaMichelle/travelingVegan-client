const url = `http://localhost:4000/favorites`
// const token = localStorage.getItem('token');

class FavoriteModel {
//     // static getFavorite = () => {
//     //     return fetch('http://localhost:4000/favorites')
//     //         .then((response) => response.json())
//     // }

    static createFavorite = (favorite) => {
        const token = localStorage.getItem('token');
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(favorite)
        })
            .then((response) => response.json())
    }
}


export default FavoriteModel;