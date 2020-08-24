import React from 'react';
import Profile from '../Profile/Profile';

function Profiles(props){
    const profileList = props.users.map((userObj) => {
        return <Profile key={userObj._id} user={userObj} list={true} />
    });

    return (
        <div>
            Profiles
            {profileList}
        </div>
    )
}

export default Profiles;
