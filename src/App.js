// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'

class App extends React.Component{
  render() {
    const boss = '李云龙'
    return (
      <div>
        <h2>独立团团长，{boss}</h2>
        <一营 老大='张大喵'></一营>
        <骑兵连 老大='孙德胜'></骑兵连>
      </div>
    )
  }
}

function 骑兵连(props) {
  return <h2>骑兵连连长，{props.老大}，冲啊！</h2>
}

class 一营 extends React.Component{
  render() {
    const boss = '张大喵'
    return <h2>一营营长，{this.props.老大}</h2>
  }
}

export default App