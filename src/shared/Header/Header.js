import React from 'react';
import './header.scss';

const Header = ({ children }) => (
  <div className="main-tamplate">
    <div className="header">
      <div className="header-action-buttons">
        <ul className="action-buttons">
          <li>Software</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li>Partners</li>
          <li>About</li>
        </ul>
      </div>
    </div>
    <div className="main-content">
      {children}
    </div>
    <div className="footer">
      <div className="menu-items-wrapper">
          <div className="menu-items">
            <label>LAYER MOUNTAINS CARTOON</label>
            <p>Before now now skirt and policies.
              <br />Sometimes undergraduate pregnant hate innovative salad I will not, my throat, my football so important to invest bananas. 
              <br />But before the weekend football skirt sapien lorem layer various mountains pull adapter into the customer. Lorem very smart 
              <br />Before the very first in the entrance vestibule. Adipiscing eu football football football Football weekend and undergraduate and throat. Integer, and the present, but a lot.
              <br /> Before now skirt and a pregnant now.</p>

          </div>
          <div className="menu-items">
            <label>Connect With Leads</label>
            <ul className="items">
              <li>Find New Prospects</li>
              <li>Email Tracking</li>
              <li>Sales Email Templates</li>
              <li>Click to Call Your Leads</li>
              <li>Email Marketing</li>
            </ul>
          </div>
          <div className="menu-items">
            <label>Close and Manage Leads</label>
            <ul className="items">
              <li>Document Tracking Tool</li>
              <li>Meeting Schedule Tool</li>
              <li>Sales Automation Tool</li>
              <li>Lead Management Tool</li>
              <li>Pipeline Management Tool</li>
            </ul>
          </div>
          
        </div>
      </div>
  </div>
);

export default Header;
