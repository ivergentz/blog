import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BlogEntry from './components/BlogEntry'
import Layout from './Globalstyle'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <Router>
      <div>
        <Layout />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/blog-entry/:id" children={<BlogEntry />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
