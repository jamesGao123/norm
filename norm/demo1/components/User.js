import React, { Component, PropTypes } from 'react'

export default class User extends Component {
    constructor(props) {
        super(props);
    }
    handleDelete() {
        this.props.delete(this.props.user);
    }

    render() {
        const {user}=this.props;
        return (
            <div>
                <span>姓名:</span>
                <span>{user.name}&nbsp; </span>
                <a onClick={this.handleDelete.bind(this)}>
                    删除
                </a>
            </div>
        )
    }
}

User.propTypes = {
    user: PropTypes.object,
    delete: PropTypes.func.isRequired
}
