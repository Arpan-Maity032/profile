import React from 'react';
import "../styles/sider.css";
import Arpan_cv from "../media/Arpan_maity_resume2.pdf";
import { Typography } from "antd";
import { Tag } from "antd";

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
  const skills = [" C++","Java", "Python", "JavaScript", "SQL","HTML5","CSS3","React","Django","Flask","Streamlit","Bootstrap","Express.js",
"REST APIs","FastAPI"];
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
        <Content>
          <div className='welcome'>Welcome to my Profile<br/>
          I am a <div class="dropping-texts">
          <div>Developers</div>
          <div>Designers</div>
          <div>Coders</div>
          <div>EVERYONE!</div>
        </div></div>
        <Typography className='objective'>
          <h1>Objective</h1>
          <h5>Highly motivated Computer Science Engineering student with a strong foundation in artificial intelligence, machine learning,
 and software development. <strong>Skilled in Python, c++, Java, SQL, and AWS.</strong> Seeking to apply technical expertise and problem-solving
 abilities to contribute to innovative projects in a growth-focused organization.</h5>
        </Typography>
        <Typography>
          <h1>Programming SKills/Knowledge:</h1>
          {skills.map((skill)=>(
            <Tag color="blue" key={skill}>
              {skill}
            </Tag>
          ))}
        </Typography>
          </Content>
    </Layout>
  )
}
export default Siders;