import "antd/dist/antd.css";
import "./index.css";

import { Layout, Menu } from 'antd';
import { HomeTwoTone, ThunderboltTwoTone } from '@ant-design/icons';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Posts from './pages/Posts';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import Home from './pages/Home';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

function App() {



  // let active=window.location.href.split('/');
  // active=active[active.length - 1];
  let activePage = window.location.pathname;
  // const [activePage, setActivePage] = useState(active);

  // const toggle = () => setCollapsed(!collapsed);
  // const [openKeys, setOpenKeys] = React.useState(['postsMenu']);
  const openKeys = ['postsMenu'];

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => setCollapsed(collapsed);

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={[activePage]} mode="inline" defaultOpenKeys={openKeys}>
                <Menu.Item key="/">
                    <HomeTwoTone/>
                    <span>Home</span>
                    <Link to="/" />
                </Menu.Item>
                <SubMenu key="postsMenu" icon={<ThunderboltTwoTone />} title="Posts">
                  <Menu.Item key="/posts">
                    <span>Show Posts</span>
                    <Link to="/posts" />
                  </Menu.Item>
                  <Menu.Item key="/addpost">
                    <span>Add Post</span>
                    <Link to="/addpost" />
                  </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
        <Layout>  
            <Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}>
                {/* <HomeTwoTone 
                    className="trigger"
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    style={{ cursor: 'pointer' }}
                    onClick={toggle}
                /> */}
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/posts" element={<Posts/>} />
                    <Route path="/addpost" element={<AddPost/>} />
                    <Route path="/editpost/:post_id" element={<EditPost/>} />
                </Routes>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Projekt on loodud aine IFI6229.DT raames.
            </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}


export default App;

