import React from 'react';
import StickyFooter from 'react-sticky-footer';

const Footer = () => (
  <StickyFooter
    bottomThreshold={50}
    normalStyles={{
      backgroundColor: "#7F92A5",
      padding: "5rem"
    }}
    stickyStyles={{
      backgroundColor: "#7F92A5",
      padding: "5rem"
    }}
  >
    <p style={{float: 'right', color: '#FFFDFC'}}>&copy; Daisy Good & Rebecca Kohl 2018</p>
  </StickyFooter>
);

export default Footer;
