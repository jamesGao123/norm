import React, { Component, PropTypes } from 'react'

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {items=[],renderItem}=this.props;
        return (
            <div>
                {items.map(renderItem)}
            </div>
        )
    }
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired
}
