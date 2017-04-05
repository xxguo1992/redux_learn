import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>User List</h1>
                <UserList/>
                <hr/>
                <h1>User Details</h1>
                <UserDetail/>
            </div>
        );
    }
}

module.exports = App;