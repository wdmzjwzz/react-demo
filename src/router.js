import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from "./layouts/default"
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Connect = lazy(() => import('./pages/Connect'));
const SubCom = lazy(() => import('./components/subHome'));
const login = lazy(() => import('./pages/login'));

export default (props) => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/login" exact component={login} />
        <Route path="/" render={() =>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/connect" render={() => (
              <Connect>
                <Route exact path="/connect/sub" component={SubCom} />
              </Connect>
            )} />
          </Layout>
        } />

      </Switch>
    </Suspense>
  </Router>
)