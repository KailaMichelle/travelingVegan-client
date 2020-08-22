import React from 'react';
import Profile from '../Profile/Profile';

function Profiles(props){
    console.log(props)
    const profileList = props.users.map((userObj) => {
        return <Profile key={userObj._id} user={userObj} list={true} />
    });

    return (
        <div>
            {profileList}
        </div>
    )
}

export default Profiles;
