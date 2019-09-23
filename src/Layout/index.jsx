import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { hot, setConfig } from "react-hot-loader";
import AuthRoute from '../components/AuthRoute'
import Login from '../views/Login'
import Home from '../views/Home'

setConfig({
  reloadHooks: false,
});

const Test = () => <h2>Test ...</h2>
function Layout() {
    return (
      <BrowserRouter>
        <Switch>
          <AuthRoute path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/test' component={Test} />
        </Switch>
      </BrowserRouter>
    )
}

export default hot(module)(Layout);
