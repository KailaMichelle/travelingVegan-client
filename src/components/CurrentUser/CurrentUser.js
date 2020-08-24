import React, { Component } from 'react';


function CurrentUser(props){
    // console.log(props.user);
    return(
       <div>
           PROFILES
           {props.user.username}
           {props.user.email}
       </div>
    )
}

export default CurrentUser;