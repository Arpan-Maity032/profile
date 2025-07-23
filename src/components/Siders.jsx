import React from 'react';
import "../styles/sider.css";
import Arpan_cv from "../media/Arpan_maity_resume2.pdf";

import { Button, Layout} from "antd";
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { Avatar } from "antd";
const Siders = () => {
  const downloadCv =()=>{
    const link = document.createElement("a");
    link.href = Arpan_cv;
    link.download = "Arpan_Cv.pdf";
    link.click();
  }
  return (
    <Layout>
        <Sider className='sider'>
            <Avatar className='picture' src="https://i.pravatar.cc/150?img=3" alt="Profile" />
            <div className='intro'>
              <h1>Arpan Maity</h1>
              <p>Kolkata , West Bengal</p>
              <p>India  <Avatar className="flag" src="https://clipground.com/images/indian-flag-icon-clipart-6.jpg" alt="flag"/></p><br/>
              <h2>Fullstack Developer<br/>& <br/>AI Engineer</h2>
            </div>
            <div className='resume'>
              <Button onClick={downloadCv}>Download Resume</Button>
            </div>
        </Sider>
        <Content className=''>
          <div className='welcome'>Welcome to my Profile<br/>
          I am a <div class="dropping-texts">
          <div>Developers</div>
          <div>Designers</div>
          <div>Coders</div>
          <div>EVERYONE!</div>
        </div></div>
          </Content>
    </Layout>
  )
}
export default Siders;