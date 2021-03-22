import React, { Component } from 'react';
import { Grid, List } from 'antd-mobile';
import PropTypes from "prop-types";
 
class AvatarSelector extends Component {

  // 属性检测：
  static propTypes = {
    selectAvatar: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() { 
    const avatarList = 'boy, girl, man, woman, bull, chick, crab, hedgehog, hippopotamus, koala, lemur, pig, tiger, whale, zebra'
      .split(', ')
      .map(v => ({
        icon: require(`../img/${v}.png`).default,
        text: v
      }))
    // console.log(avatarList)
    // console.log(this)
    const gridHeader = this.state.icon
      ? (
          <div>
            <span>已选择头像</span>
            <img 
              src={this.state.icon} 
              alt=""
              style={{width:20}}
            />
          </div>
        )
      : <div>请选择头像</div>
    return (
      <div>
        <List renderHeader={()=>gridHeader}>
          <Grid 
            data={avatarList} 
            columnNum={5}
            onClick={elm=>{
              this.setState(elm)
              this.props.selectAvatar(elm.text)
            }}
          ></Grid>
        </List>
      </div>
    );
  }
}
 
export default AvatarSelector;