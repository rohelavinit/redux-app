import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'
import {selectRoomMate} from '../actions/selected-room-mate'

class UserList extends Component {

    renderList() {
        return this.props.users.map((user) => {
            return (
                <li
                    key={user.id}
                    onClick={() => this.props.selectUser(user,'second')}
                >
                    {user.first} {user.last}
                </li>
            );
        });
    }

    renderRoomMate(){
        return this.props.roommates.map((roommate) => {
        return (
                 <li
                 key={roommate.id}
                 onClick={() => this.props.selectRoomMate(roommate,'third')}>
                    {roommate.name}
                </li>
                );

        })
    }

    render() {
        return (
            <ul>
                {this.renderList()}
                {this.renderRoomMate()}
            </ul>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users,
        roommates: state.roommates
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser,selectRoomMate: selectRoomMate}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
