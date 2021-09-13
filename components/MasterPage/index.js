import { Layout, PageHeader } from "antd";
import { GiftTwoTone } from "@ant-design/icons";
const { Footer, Content } = Layout;

const MasterPage = (props) => {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <PageHeader
          className="site-page-header"
          title={<><GiftTwoTone /> <span>WishList!</span></>}
          subTitle="a MobX-State-Tree implementation"
        />
        <Content style={{ height: "100%", padding: "2rem 4rem", overflowY:"scroll" }}>
          {props.children}
        </Content>
        <Footer style={{borderTop:"1px solid lightgrey"}}>Jácomo Nanci Hodnik - 2021</Footer>
      </Layout>
    </>
  );
};

export default MasterPage;
