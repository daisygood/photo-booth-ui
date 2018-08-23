import React from 'react';
import { Route } from 'react-router-dom';
import { Responsive, Segment } from 'semantic-ui-react';
import Events from './Events';
import ImageCardGroup from "./ImageCard";
import Display from './Display';

const MobileContainer = ({ children }) => (
  <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
    <Segment
      textAlign='center'
      style={{ minHeight: 350, padding: '0em' }}
      vertical
    >
      <div className="App">
        <div>
          <Route exact path="/" component={() => <Events mobile />} />
          <Route exact path="/events" component={() => <Events mobile />} />
          <Route exact path="/events/:id" component={() => <ImageCardGroup mobile />} />
          <Route exact path="/display" component={() => <Display mobile />} />
        </div>
      </div>
    </Segment>
    {children}
  </Responsive>
);

export default MobileContainer;
