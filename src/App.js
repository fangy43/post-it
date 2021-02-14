import React, { Component } from 'react'
import PostForm from './components/PostForm/PostForm'
import AllPost from './components/AllPost/AllPost'

import './App.css'


class App extends Component {
 render(){
    return (
      <div className="App">
        <div className="Header">
          Post it
        </div>
        <div className="App-Container">
          <PostForm/>
          <AllPost/>
        </div>
      </div>
    );
 }
}

export default App;
