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
      minHeight: 600,
      padding: '1em 0em'
    }}
    vertical
    className='Header'
  >
    <Header
      as='h1'
      content='NM Photo Booth'
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
  </Segment>
);

export default HeaderComponent;
