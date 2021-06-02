import React , {Component} from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg';

import './App.css';
import reactDom from 'react-dom';

class App extends Component {
  constructor(){
    super()
     this.state = {
      items: [],
     isLoaded: false
  }
}

componentDidMount(){

  fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    })

}

  render(){

    var {isLoaded, items} = this.state
     if(!isLoaded) {
       return <div>loading...</div>

    } else{
      return (
        <div className="App">
             <ul>
                {items.map(item => ( 
                  <li key={item.id}>
                    {item.name} | {item.email}
                  </li>


                ) )}
               
             </ul>
        </div>
 );
    }
        
    }
  
}

export default App;
