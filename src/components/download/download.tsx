import React, { Component } from "react";
import { Menu, Dropdown, Spin } from "antd";
import MyIcon from "../../components/icon/icon";
// import domtoimage from 'dom-to-image';
interface iProps {
  exportPdf?: ()=>void
  exportExcel?: ()=>void
  loading?:boolean
}

export default class Download extends Component<iProps> {
  exportPdf = () => {
    this.props.exportPdf();
  };
  exportExcel = () => {
    this.props.exportExcel();
  };
  menu = (
    <Menu>
      <Menu.Item onClick={this.exportPdf}>导出图片</Menu.Item>
      <Menu.Item onClick={this.exportExcel}>导出Excel</Menu.Item>
    </Menu>
  );
  render() {
    let {loading=false}=this.props
    return (
      <Dropdown overlay={loading?(<></>):this.menu} placement="bottomCenter">
        <Spin spinning={loading}>
        <MyIcon type="iconexport" className={"myicon"} />
        </Spin>
      </Dropdown>
    );
  }
}
