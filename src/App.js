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
import { Button, List } from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

class App extends React.Component {
  render() {
    const boss = '李云龙'
    return (
      <div>
        <h2>独立团团长，{boss}</h2>
        <Battalion1 boss='张大喵'></Battalion1>
        <Squadron boss='孙德胜'></Squadron>
      </div>
    )
  }
}

function Squadron(props) {
  return <h2>骑兵连连长，{props.boss}，冲啊！</h2>
}

class Battalion1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      solders: [
        '虎子',
        '柱子',
        '王根生'
      ]
    }
    // this.addSolder = this.addSolder.bind(this)
    console.log('constructor')
  }
  addSolder = () => {
    console.log('addSolder')
    this.setState({
      solders: [
        ...this.state.solders, '新兵蛋子' + Math.random()
      ]
    })
  }
  render() {
    console.log('render')
    // const boss = '张大喵'
    return (
      <div>
        <h2>一营营长，{this.props.boss}</h2>
        {/* <button onClick={() => this.addSolder()}>新兵入伍</button> */}
        <Button type='primary' onClick={this.addSolder}>新兵入伍</Button>
        <List
          renderHeader={() => {'士兵列表'}}
        >
          {this.state.solders.map(v => {
            return (
              <List.Item key={v}>
                {v}
              </List.Item>
            )
          })}
        </List>
      </div>
    )
  }
}

export default App