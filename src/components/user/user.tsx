import React, { Component } from 'react'
import { Avatar, Dropdown, Menu } from "antd";
interface iPops{
  onClick: () => void;
  username:string
}
export default class User extends Component<iPops> {
  render() {
    const menu = (
      <Menu>
        <Menu.Item onClick={this.props.onClick}>退出登录</Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <span>
        <Avatar style={{ verticalAlign: "-6px" }} icon="user" />
          <span  style={{height:"32px",display:"inline-block",lineHeight:"32px",verticalAlign:'super'}}>
          &nbsp;{this.props.username}
          </span>
        </span>
      </Dropdown>
    );
  }
}
