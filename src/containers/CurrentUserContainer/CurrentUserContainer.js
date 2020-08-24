import React from 'react';
import UserModel from '../../models/UserModel';
import CurrentUser from '../../components/CurrentUser/CurrentUser';

class CurrentUserContainer extends React.Component {
    state = {
        user: {},
    };

    componentDidMount(){
        UserModel.getUserById(this.props.match.params.id)
            .then((result) => {
                this.setState({user: result});
            })
            .catch((err) => console.log(err))
    }

    render(){
        console.log(this.props)
        return <CurrentUser user={this.state.user} />
    }
}

export default CurrentUserContainer;