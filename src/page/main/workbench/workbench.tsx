import React,{Component} from "react";
import { Layout} from "antd";
import "./workbench.less";
import HeaderToolbar from "../../../composite/header-toolbar/header-toolbar";
import Designer from "./components/designer/designer";
import Footer from './components/footer/footer'
import EventEmitter from './public/EventEmitter';
import { EventTopicEnum } from '../../../models/enum/enum';

const { Header, Sider, Content } = Layout;
interface iProps{
  paperId:string
}

export default class Workbench extends Component<iProps> {
  shouldComponentUpdate(){
    return false;
  }
  location = () =>{
    EventEmitter.emit(`${this.props.paperId}${EventTopicEnum.ON_LOCATION}`);
  }
  render() {
    return (
      <div>
      <Layout className={"workbench"}>
        <Header>
          <HeaderToolbar paperid={this.props.paperId} left right />
        </Header>
        <Layout>
            <Sider theme={"light"} collapsible collapsedWidth={0} width={220} className={"left-sider"}>
            </Sider>
            <Content className={"content"}>
              <Designer paperId={this.props.paperId}></Designer>
            </Content>
          <Sider
            width={220}
            theme={"light"}
            collapsible
            reverseArrow
            collapsedWidth={0}
            className={"right-sider"}
          >
          </Sider>
        </Layout>
        <Footer paperId={this.props.paperId}></Footer>

      </Layout>
    </div>
    )
  }
}
