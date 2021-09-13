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
        <Content style={{ height: "100%", padding: "2rem", overflow:"scroll" }}>
          {props.children}
        </Content>
        <Footer>Jácomo Nanci Hodnik - 2021</Footer>
      </Layout>
    </>
  );
};

export default MasterPage;
