import React, { Component } from "react";
import { Layout, Card, Row, Col, Radio, Icon } from "antd";
import "./home.less";
import HeaderToolbar from "../../../composite/header-toolbar/header-toolbar";
// import introJs from 'intro.js'
// import 'intro.js/introjs.css'
const { Header, Content } = Layout;
export default class Home extends Component {
  state = {
    tableStyle: "list"
  };
  changeTableStyle = e => {
    let { value } = e.target;
    this.setState({
      tableStyle: value
    });
  };
  componentDidMount() {}
  render() {
    return (
      <Layout>
        <Header>
          <HeaderToolbar right />
        </Header>
        <Layout>
          <Content>
            <div className="home">
              <div className="wrap">
                <Row gutter={10}>
                  <Col span={18}>
                    <Card
                      style={{ cursor: "auto" }}
                      hoverable
                      headStyle={{ fontWeight: "bold" }}
                      title="我的图纸"
                      extra={
                        <Radio.Group
                          value={this.state.tableStyle}
                          onChange={this.changeTableStyle}
                        >
                          <Radio.Button value="list">
                            <Icon type="unordered-list" /> 列表
                          </Radio.Button>
                          <Radio.Button value="card">
                            <Icon type="appstore" /> 卡片
                          </Radio.Button>
                        </Radio.Group>
                      }
                    >
                      我是首页！
                    </Card>
                  </Col>
                  <Col span={6} className={"memu"}>
                    <Card
                      style={{ cursor: "auto" }}
                      hoverable
                      headStyle={{ fontWeight: "bold" }}
                      title="常用操作项"
                      bodyStyle={{ textAlign: "center", padding: "0 0 16px" }}
                    ></Card>
                    <br />
                    <Card
                      style={{ cursor: "auto" }}
                      hoverable
                      headStyle={{ fontWeight: "bold" }}
                      title="报表"
                      bodyStyle={{ textAlign: "center", padding: "0 0 16px" }}
                    ></Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
