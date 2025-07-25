import React from 'react';
import "../../styles/Education.css"
import { Layout } from "antd";
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { Tree } from "antd";
const Education = () => {
    const treeData = [
  {
    title: 'Bachelor of Technology',
    key: 'btech',
    children: [
      {
        title: 'ABC Institute of Technology',
        key: 'btech-college',
        children: [
          {
            title: '2021 - 2025',
            key: 'btech-year',
            children: [
              { title: 'Data Structures', key: 'ds' },
              { title: 'DBMS', key: 'dbms' },
              { title: 'Operating Systems', key: 'os' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Higher Secondary',
    key: 'hs',
    children: [
      {
        title: 'XYZ High School',
        key: 'hs-school',
        children: [
          {
            title: '2019 - 2021',
            key: 'hs-year',
            children: [
              { title: 'Physics', key: 'phy' },
              { title: 'Chemistry', key: 'chem' },
              { title: 'Mathematics', key: 'math' },
            ],
          },
        ],
      },
    ],
  },
];

  return (
    <Layout className='education'>
        <Sider width={300} collapsedWidth={0} breakpoint='md' className='clg-name'>
            <h1>Educations</h1>
            <Tree treeData={treeData}
        defaultExpandAll
        showLine className='edu-tree'/>
        </Sider>
        <Content className='performance'>
            <h1>Performance</h1>
        </Content>
    </Layout>
  )
}
export default Education;