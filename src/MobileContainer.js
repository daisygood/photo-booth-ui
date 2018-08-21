import React from 'react';
import { Route } from 'react-router-dom';
import { Responsive, Segment } from 'semantic-ui-react';
import Header from './Header';
import Events from './Events';
import ImageCardGroup from "./ImageCard";


const MobileContainer = ({ children }) =>  (
  <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
    <Segment
      textAlign='center'
      style={{ minHeight: 350, padding: '0em' }}
      vertical
    >
      <div className="App">
        <Header mobile />
        <div>
          <Route exact path="/" component={Events} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/events/:id" component={ImageCardGroup} />
        </div>
      </div>
    </Segment>
    {children}
  </Responsive>
);

export default MobileContainer;
