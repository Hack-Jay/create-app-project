import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AuthRoute from '../components/AuthRoute'
import Login from '../views/Login'
import Home from '../views/Home'

function Layout() {
  const right = true
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path='/' exact component={Home} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default Layout