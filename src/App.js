import React, {Component, useState, useEffect} from 'react';

const App = () => {
const [count, setCount] = useState(0);

useEffect(()=>{
   document.title = `Clicked ${count} times`

})

const increment = () =>{
  setCount(count + 1);
};

    return (
      <div>
      <h2>counter App</h2> 
      <button onClick={increment}> Clicked {count} times
      </button>
      </div>
    );
    };





// class App extends Component{
// state ={
//   count: 0
// }
// // method
// increment = () => {
//   this.setState({
//   count: this.state.count + 1
// });
// };
// // Life Cycle Methods
// componentDidMount(){
//   document.title = `Clicked ${this.state.count} times`
// }

// // Whenever Life Cycle Updates
// componentDidUpdate(){
//   document.title = `Clicked ${this.state.count} times`
// }


//   render(){
//     return (
//       <div>
//       <h2>counter App</h2> 
//       <button onClick={this.increment}> Clicked {this.state.count} times
//       </button>
//       </div>
//     );
//   }
// }

export default App;