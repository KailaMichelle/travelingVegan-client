import React from 'react';
import { Link } from 'react-router-dom';

function Profile(props){
    const { user, list } = props
    return (
        <div>
            <Link to={`/profiles/${user._id}`}>
                <div>
                {user.username}
                </div>

                {!list && (
                    <>
                    {user.username}
                    </>
                )}
            </Link>
        </div>
    )
}

export default Profile;
