import Book from './components/Book'
import CreateBook from './components/CreateBook'
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: ''
    }
    this.notifyPathname = this.notifyPathname.bind(this)
  }

  notifyPathname(pathname) {
    this.setState({ pathname: pathname })
  }

  render() {
    return (
      <>
        <Header
          pathname={this.state.pathname}
          notifyPathname={this.notifyPathname}
        />

        <div className="container-fluid mt-3">
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Book />}
            />

            <Route
              exact
              path="/createBook"
              component={() => <CreateBook />}
            />


            <Route
              exact
              path="/edit/:id"
              component={() => <CreateBook />}
            />
          </Switch>
        </div>
      </>
    )
  }
}

export default App;
