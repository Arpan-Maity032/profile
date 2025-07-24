import React from 'react';
import "../styles/Footers.css";

const Footer = () => {
  return (
    <div className='footer'>
      <h3>Social</h3>
      <div className='f-des'>
        <ul>
          <li>Linkdin</li>
          <li>Instagram</li>
          <li>Github.com</li>
          <li>Leetcode</li>
        </ul>
      </div>
      <h3>Contact</h3>
      <div className='f-des'>
        <ul>
        <li>gmail: arpanmaity032@gmail.com</li>
        <li>Phone: 8016748261</li>
        <li>Phone: 7001970948</li>
      </ul>
      </div>
      <h3>support</h3>
      <div className='f-des'>
        <ul>
          <li>Scan & Pay</li>
        </ul>
      </div>
    </div>
  )
}
export default Footer;