import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Belajar Komponen, Props dan Nested Component
// function Biodata({ age }) {
//   return <>{age} Years old</>;
// }

// function Greetings({ name, age }) {
//   return <h1>Hello {name}. <Biodata age={age}/></h1>
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Greetings name="Deri Kurniawan" age="20"/>
//       </header>
//     </div>
//   );
// }

// end of Belajar Komponen, Props dan Nested Component

// Belajar State dan Lifecycle

// class Timer extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       time: props.start,
//     }
//   }

//   // Lifecyle

//   // component saat dipakai
//   componentDidMount() {
//     this.addInterval = setInterval(() => this.increase(), 1000);
//   }

//   // component saat telah tidak terpakai
//   componentWillUnmount() {
//     clearInterval(this.addInterval);
//   }

//   increase() {
//     this.setState({
//       time: parseInt(this.state.time) + 1,
//     });
//   }

//   render() {
//     return (
//       <div>{this.state.time} Detik</div>
//     )
//   }
// }

// // end of Belajar State dan Lifecycle

// class App extends Component {
//   render(){
//     return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Timer start="0"/>
//         <Timer start="10"/>
//       </header>
//     </div>
//     );
//   };
// }

// Belajar Clicker
// function Clicker() {
//   function handlerClick(e) {
//     alert('Berhasil Mengklik');
//     e.preventDefault();
//   }

//   return (
//     <a href="#" onClick={handlerClick}>Klik Disini</a>
//   )
// }

class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      toggleStatus: true,
    }
  }

  handleClick() {
    this.setState((state) => ({
      toggleStatus: !state.toggleStatus,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        {this.state.toggleStatus ? "ON" : "OFF"}
      </button>
    )
  }
}
class App extends Component {
  render(){
    return (
    <div className="App">
      <Toggle/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <Clicker/> */}
    </div>
    );
  };
}

export default App;
