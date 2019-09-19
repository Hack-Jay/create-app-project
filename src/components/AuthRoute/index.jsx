import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

class AuthRoute extends Component {
  render() {
    const { form, changeLoginFormState, component: Component, ...rest } = this.props;
    const user = localStorage.getItem('user') || ''

    return (
      <Route
        {...rest}
        render={props => {
        return (
          user ? (
            <Component {...props} />
          ) :
          <Redirect to='/login' />
        )
        }}
      />
    );
  }
}

export default AuthRoute
