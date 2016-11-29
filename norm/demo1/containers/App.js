import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Explore from '../components/Explore'
import {addUser} from '../actions/index';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(nextValue){
    this.props.addUser({name:nextValue});
    browserHistory.push(`/${nextValue}`);
  }
  render() {
    const { children, name } = this.props;
    return (
        <div>
          <Explore value={name} onChange={this.handleChange} />
          {children}
        </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    name: ownProps.location.pathname.substring(1) || '请输入你的姓名'
  }
}

export default connect(mapStateToProps,{
  addUser
})(App)
