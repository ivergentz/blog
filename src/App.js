import React from 'react'
import Navigation from './components/navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import PagerRenderer from './page-renderer'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/:page" component={PagerRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
