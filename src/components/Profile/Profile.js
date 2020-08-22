import React from 'react'

function Profile(props){
    const { user } = props;
    console.log(user);
    return (
        <div>
            {user.username}
        </div>
    )
}

export default Profile;
