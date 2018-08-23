
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Loader, Card, Image } from 'semantic-ui-react';

class Events extends React.Component {
  formatDate = date => {
    if (date) {
      return moment(date).format('LL');
    } else {
      return null;
    }
  };

  renderDate = (start, end) => {
    const startDate = this.formatDate(start);
    const endDate = this.formatDate(end);
    let formattedDates;
    if (end) {
      formattedDates = `${startDate} - ${endDate}`;
    } else {
      formattedDates = startDate
    }
    return (
      <p
        style={{
          fontSize: this.props.mobile ? '8px' : '14px',
        }}
      >{formattedDates}</p>
    )
  };

  render() {
    const { data, mobile } = this.props;
    if (data.loading) {
      return (<Loader active inline='centered' />)
    }

    return (
      <div style={{
        margin: '0 auto',
        padding: mobile ? '25px 50px' : '50px 100px',
        minHeight: mobile ? '200px' : '400px'
      }}>
        <Card.Group itemsPerRow={mobile ? 2 : 4}>
          {
            data.allEvents.map(event => (
              <Card
                key={event.id}
                raised
              >
                <Link to={"/events/" + event.s3Folder}>
                  <a href={''}><Image src={event.logo} /></a>
                </Link>
                <Card.Content extra style={{
                  padding: mobile ? '0.5em 0.8em' : ''
                }}>
                  <div>
                    <h2 style={{
                      fontSize: mobile ? '10px' : '16px',
                    }}>{event.name}</h2>
                    {
                      this.renderDate(event.startDate, event.endDate)
                    }
                  </div>
                </Card.Content>
              </Card>
            ))
          }
        </Card.Group>
      </div>
    )
  }
}
const ALL_EVENTS = gql`
 query{
        allEvents(orderBy: startDate_DESC) {
          id
          startDate
          endDate
          name
          s3Folder
          logo
        }
      }
`;


export default graphql(ALL_EVENTS)(Events)
