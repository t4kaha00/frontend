import React from 'react'
import { Switch, Route } from 'react-router-dom'
import News from './components/News'
import Navigation from './Navigation'
import Home from './components/Home'
import DigitalMarketing from './components/pages/digital-marketing'
import GoogleDisplay from './components/pages/google-display'
import HigherEducation from './components/pages/higher-education'


const Router = () => (
  <router>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/news' component={News}/>
      <Route path='/pages/digital-marketing' component={DigitalMarketing}/>
      <Route path='/pages/google-display' component={GoogleDisplay}/>
      <Route path='/pages/higher-education' component={HigherEducation}/>
    </Switch>
  </router>
)

export default Router
