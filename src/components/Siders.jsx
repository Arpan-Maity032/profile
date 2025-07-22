import React from 'react';
import "../styles/sider.css";

import { Layout } from "antd";
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { Color } from 'antd/es/color-picker';

const Siders = () => {
  return (
    <Layout>
        <Sider className='sider'>
            <p>welcome to sider</p>
        </Sider>
        <Content><p>This is content space</p></Content>
    </Layout>
  )
}
export default Siders;