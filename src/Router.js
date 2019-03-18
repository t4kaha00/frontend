import React from 'react'
import { Switch, Route } from 'react-router-dom'
import News from './components/News'
import Navigation from './Navigation'
import Home from './components/Home'
import DigitalMarketing from './components/pages/digital-marketing'

const Router = () => (
  <router>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/news' component={News}/>
      <Route path='/pages/digital-marketing' component={DigitalMarketing}/>
    </Switch>
  </router>
)

export default Router
