import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class RoomMateDetails extends Component {
    render() {
        if (!this.props.roommate) {
            return (<div>Select a roommate...</div>);
        }
        return (
            <div>
                <h2>{this.props.roommate.name}</h2>
                <h3>Owner: {this.props.roommate.ownerName}</h3>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        roommate: state.activeUser.roomMate,
        toogle : state.activeUser.toogle
    };
}

export default connect(mapStateToProps)(RoomMateDetails);
