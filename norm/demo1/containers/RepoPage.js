import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import List from '../components/List'
import User from '../components/User';
import {deleteUser} from '../actions/index';

class RepoPage extends Component {
    constructor(props) {
        super(props)
        this.renderUser=this.renderUser.bind(this);
        this.deleteUser=this.deleteUser.bind(this);
    }

    deleteUser(user){
        this.props.deleteUser(user);
    }

    renderUser(user,i) {
        return (
            <User key={i} user={user} delete={this.deleteUser} />
        )
    }

    render() {
        const { users } = this.props;
        return (
            <List items={users} renderItem={this.renderUser} />
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps,{
    deleteUser
})(RepoPage)
