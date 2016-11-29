import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import RepoPage from './containers/RepoPage'

export default (
  <Route path="/" component={App}>
    <Route path="/:name" component={RepoPage} />
  </Route>
)
