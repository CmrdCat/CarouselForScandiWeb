import React, { Component } from 'react'
import Container from '../container/container'

import './app.css'

class App extends Component {
   render() {
      return (
         <div className="app">
            <h1>Carousel</h1>
            <Container />
         </div>
      )
   }
}

export default App