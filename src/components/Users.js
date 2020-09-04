import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.props.users.map((user, index) => {
            return <li>{user.username}</li>
          })}
          <h4>User Count: {this.props.users.length}</h4>
        </ul>
      </div>
    )
  }
}

const mapStateToProps= (state) =>{
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);

