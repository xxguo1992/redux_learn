import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends React.Component {

    renderList() {
        return this.props.users.map(
            (user) => {
                return (
                    <li
                        key={user.id}
                        onClick={() => this.props.selectUser(user)}
                    >
                        {user.first} {user.last}
                    </li>
                );
            }
        );
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectUsers: selectUser, dispatch})
}


export default connect(mapStateToProps, matchDispatchToProps)(UserList);