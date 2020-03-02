import 'bulma'
import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ArticleIndex from './components/ArticleIndex'
import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import Login from'./components/auth/Login'
import Register from './components/auth/Register'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/articles" component={ArticleIndex}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register}/>
          </Switch>
          </main>
        </BrowserRouter>
      // <ArticleIndex />
    )
  }
}

export default App
