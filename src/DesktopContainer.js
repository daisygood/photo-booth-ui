import React, { Component } from 'react';
import { Responsive, Segment } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import Header from './Header';
import ImageCardGroup from './ImageCard';
import Events from './Events';


class ResponsiveContainer extends Component {
  render() {
    return (

      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment
          textAlign='center'
          style={{ minHeight: 700, padding: '0em' }}
          vertical
        >
          <div className="App">
            <Header />
            <div>
              <Route exact path="/" component={Events} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/events/:id" component={ImageCardGroup} />
            </div>
          </div>
        </Segment>
        {this.props.children}
      </Responsive>
    )
  }
}
export default ResponsiveContainer;
