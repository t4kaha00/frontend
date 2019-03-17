import React from 'react'
import { Switch, Route } from 'react-router-dom'
import News from './components/News'
import Navigation from './Navigation'
import Home from './components/Home'

const Router = () => (
  <router>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/news' component={News}/>
    </Switch>
  </router>
)

export default Router
