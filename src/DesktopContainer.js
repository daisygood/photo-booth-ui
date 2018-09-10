import React from 'react';
import { Responsive, Segment } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import ImageCardGroup from './ImageCard';
import Events from './Events';
import Display from './Display';

const DesktopContainer = ({ children }) => (
  <Responsive minWidth={Responsive.onlyComputer.minWidth}>
    <Segment
      textAlign='center'
      style={{ minHeight: 700, padding: '0em' }}
      vertical
    >
      <div className="App">
        <div>
          <Route exact path="/" component={Events} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/events/:id" component={ImageCardGroup} />
          <Route exact path="/display" component={Display} />
        </div>
      </div>
    </Segment>
    {children}
  </Responsive>
);

export default DesktopContainer;
