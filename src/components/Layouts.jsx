import React from 'react';
import Siders from './Siders';

import { Layout } from "antd";
import { Content, Header,Footer } from 'antd/es/layout/layout';
import Headers from './Headers';
const Layouts = () => {
  return (
    <Layout>
        <Header><Headers/></Header>
        <Content><Siders/></Content>
        <Footer><div><p>Welcome</p></div></Footer>
    </Layout>
  )
};
export default Layouts;
