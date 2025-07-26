import React from 'react';
import "../../styles/Education.css";
import { Layout } from "antd";
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { Tree } from "antd";

import PlotlyChart from "./PlotlyChart";
import PlotlyDgpa from "./PlotlyDgpa";



const Education = () => {
    const treeData = [
  {
    title: 'Bachelor of Technology',
    key: 'btech',
    children: [
      {
        title: 'Heritage Institute of Technology',
        key: 'btech-college',
        children: [
          {
            title: 'Computer Science Engineering',
            key: 'branch',
            children: [
              {
              title:'2022-2025',
              key: "duration",
              }
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Diploma',
    key: 'diploma',
    children: [
      {
        title: 'APC Ray Polytechnic',
        key: 'diploma-college',
        children: [
          {
            title: '2017-2020',
            key: 'duration',
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
        title: 'Baradongal Ramanath Institutions',
        key: 'hs-school',
        children: [
          {
            title: '2016 - 2017',
            key: 'hs-year',
            
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
          <div>
            <h1>B.Tech</h1>
            <h3>Computer Science and Engineering</h3>
            <div className='visua'>
              <div className='semmarks'><PlotlyChart/></div>
              <div className='semdgpa'><PlotlyDgpa/></div>
            </div>
          </div>
          <div>
            <h1>Other Educations</h1>
            <ol>
              <li><a href='https://drive.google.com/file/d/1a8C0d5KfUyvr7ZdHJBQ7WFKj1JKAD1Ae/view?usp=sharing'>Salesforce Developer Internship</a></li>
              <li>The Fundamental Concepts of Artificial Intelligence and Machine Learning - Udemy</li>
              <li>Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World
applications! - Udemy</li>
                <li>The Complete Full-Stack Web Development Bootcamp - Udemy</li>       
            </ol>
            
          </div>
        </Content>
        
    </Layout>
  )
}
export default Education;