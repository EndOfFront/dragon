import React, { Component } from "react";
import { Layout } from "antd";
import EventEmitter from "../../public/EventEmitter";
import "./footer.less";
import { EventTopicEnum } from "../../../../../models/enum/enum";
const { Footer: UIFooter } = Layout;
interface iProps {
  paperId: string;
}
interface iState {
  info: string;
}
export default class Footer extends Component<iProps, iState> {
  state = {
    info: ""
  };
  message: string = `${this.props.paperId}${EventTopicEnum.ON_INFO}`;
  showInfo=(info:string)=> {
    this.setState({
      info
    });
  }
  componentWillUnmount() {
    EventEmitter.remove(this.message, this.showInfo);
  }
  componentDidMount() {
    EventEmitter.on(this.message, this.showInfo);
  }
  render() {
    return <UIFooter className="footer">{this.state.info}</UIFooter>;
  }
}
