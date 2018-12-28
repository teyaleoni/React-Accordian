import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  state = {
    height1: '0px',
    height2: '0px',
    height3: '0px'

  }

  handleClick = (e) => {
    if(this.state.height1 === '180px'){
      this.setState({
        height1: '0px',
        height2: '0px',
        height3: '0px'
      })
    } else {
      this.setState({
        height1: '180px',
        height2: '0px',
        height3: '0px'
    })
    
    }

  }

  handleClick2 = (e) => {
    if(this.state.height2 === '100px'){
      this.setState({
        height1: '0px',
        height2: '0px',
        height3: '0px'
      })
    } else {
      this.setState({
        height1: '0px',
        height2: '100px',
        height3: '0px'
      })
    }
    
  
  }

  handleClick3 = (e) => {
    if(this.state.height3 === '250px'){
      this.setState({
        height1: '0px',
        height2: '0px',
        height3: '0px'
      })
    } else {
      this.setState({
        height1: '0px',
        height2: '0px',
        height3: '250px'
      })
    }
    
  
  }

  
  


  render() {
    return (
      <section className="container">
      <h1 id="title">React Accordian</h1>
      <ul class="accordian">
        <li>
          <h1 className="header" onClick = {this.handleClick}>Section One</h1>
          <div class="content"  id="one" >
            <p style={{height: this.state.height1}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eaque neque dolores eveniet ut asperiores sequi recusandae eius earum, totam accusamus voluptatem distinctio minima, odio fugiat id numquam eligendi laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa est quidem dicta, in porro eos iure adipisci. Sit asperiores accusamus tenetur commodi aliquid laboriosam, magni dolor! Optio fugiat ullam vel!</p>
          </div>
        </li>
        <li>
          <h1 href="#two" className="header" onClick = {this.handleClick2}>Section Two</h1>
          <div class="content"  id="two">
            <p style={{height: this.state.height2}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eaque neque dolores eveniet ut asperiores sequi recusandae eius earum, totam accusamus voluptatem distinctio minima, odio fugiat id numquam eligendi laborum.</p>
          </div>
        </li>
        <li>
          <h1 href="#three" className="header" onClick = {this.handleClick3} >Section Three</h1>
          <div class="content" id="three">
            <p style={{height: this.state.height3}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eaque neque dolores eveniet ut asperiores sequi recusandae eius earum, totam accusamus voluptatem distinctio minima, odio fugiat id numquam eligendi laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ut, fugit magnam id molestias, fuga nam eligendi nulla, labore veniam consequatur odit quos laudantium provident! Tenetur similique, tempora eveniet autem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus distinctio quia, ullam delectus quaerat voluptate praesentium perferendis? Vel ipsa quas similique, ad id quam facere voluptates quo! Consequatur, nemo eum!</p>
          </div>
        </li>
      </ul>
    </section>
    );
  }
}

export default App;
