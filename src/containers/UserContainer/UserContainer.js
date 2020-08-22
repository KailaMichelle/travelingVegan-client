import React from 'react';
import Profiles from '../../components/Profiles/Profiles'
import UserModel from '../../models/UserModel';

class UserContainer extends React.Component {
    state = {
        users: [],
    };

    componentDidMount(){
        UserModel.getAllUsers()
            .then((result) => {
                this.setState({users: result});
            })
            .catch((err) => console.log(err))
    }

    render(){
        console.log(this.props)
        return <Profiles users={this.state.users} />
    }
}

export default UserContainer;