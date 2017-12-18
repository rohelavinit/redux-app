import React,{Component} from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import RoomMateDetails from '../containers/room-mate-details';
import {connect} from 'react-redux'
require('../../scss/style.scss');

class App extends Component {
    render() {
        switch (this.props.toogle) {
                    case "first":
                        return (
                           <div>
                               <h2>User List</h2>
                               <UserList />
                           </div>
                        );
                        break;
                    case "second":
                        return(
                            <div>
                                <h2>User List</h2>
                                <UserList />
                                <hr />
                                <h2>User Details</h2>
                                <UserDetails />
                            </div>
                        )
                    case "third":
                        return(
                            <div>
                                <h2>User List</h2>
                                <UserList />
                                <hr />
                                <h2>RoomMate Details</h2>
                                <RoomMateDetails />
                            </div>
                            )
        }
    }
}

function mapStateToProps(state) {
    return {
        toogle : state.activeUser.toogle
    };
}

export default connect(mapStateToProps)(App);
