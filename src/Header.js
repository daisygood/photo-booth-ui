import React from 'react'
import './Header.css';
import {
  Segment,
  Header,
} from 'semantic-ui-react'


const HeaderComponent = ({ mobile }) => (
  <Segment
    textAlign='center'
    style={{
      minHeight: mobile ? 200 : 400,
      padding: mobile ? '0.5em 0em': '1em 0em'
    }}
    vertical
    className='Header'
  >
    <Header
      as='h1'
      style={{
        fontSize: mobile ? '1.5em' : '3em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1em' : '2em',
      }}
    />
  </Segment>
);

export default HeaderComponent;
