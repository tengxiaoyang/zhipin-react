import React, { Component } from 'react';
import PropTypes from "prop-types";
import { TabBar } from 'antd-mobile';
import { withRouter } from "react-router-dom";

@withRouter
class NavLinkBar extends Component {
  // 属性检测：
  static propTypes = {
    data: PropTypes.array.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() { 
    const navList = this.props.data.filter(v=>!v.hide)
    // console.log(navList)
    const { pathname } = this.props.location
    return (
      <div 
        style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}
      >
        <TabBar>
          {navList.map(v=>(
            <TabBar.Item
              key={v.path}
              title={v.text}
              icon={{uri: require(`./img/${v.icon}.png`).default}}
              selectedIcon={{uri: require(`./img/${v.icon}-active.png`).default}}
              selected={pathname===v.path}
              onPress={()=>{
                this.props.history.push(v.path)
              }}
            >
            </TabBar.Item>
          ))}
        </TabBar>
      </div>
    );
  }
}
 
export default NavLinkBar;