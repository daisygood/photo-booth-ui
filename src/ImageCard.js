import React from 'react';
import axios from 'axios';
import { Card, Icon, Image, Loader } from 'semantic-ui-react';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import API_URL from './config/api';

class ImageCardGroup extends React.Component {
  state = {
    content: [],
  };

  componentDidMount() {
    const url = `${API_URL}/list/folder/${this.props.match.params.id}`;
    axios.get(url)
      .then(response => {
        this.setState({ content: response.data.filter(d => d.indexOf('.gif') > -1) });
      })
      .catch(error => {
        console.log(error);
      })
  };

  render() {
    const { mobile, content, loading, allEvents } = this.props;
    if (loading) {
      return (<Loader active inline='centered' />)
    }

    let tags = [];
    let tagHTML = '';
    if (allEvents[0] && allEvents[0].tags) {
      tags = allEvents[0].tags.split(',');
      console.log(tags);
      tags.forEach(tag => {
        tagHTML += '#' + tag.trim() + ' ';
      });
    }


    return (
      <div style={{
        margin: '0 auto',
        padding: mobile ? '25px 50px' : '50px 100px',
        minHeight: mobile ? '500px' : '1000px'
      }}>
        <Card.Group itemsPerRow={mobile ? 2 : 4}>
          {
            this.state.content.map(url => (
              <Card key={Math.random()}>
                <a href={url}><Image src={url} /></a>
                <Card.Content extra style={{
                  padding: mobile ? '0.5em 0.8em' : ''
                }}>
                  <div style={{ float: 'left' }}>
                    <p style={{
                      fontSize: mobile ? '6px' : '11px',
                      lineHeight: 0,
                    }}>
                      {
                        tagHTML
                      }
                    </p>
                  </div>
                  <div style={{ float: 'right', marginTop: mobile ? '0.5em' : '1em' }}>
                    <a href='https://twitter.com/NM_News' target='_blank'>
                      <Icon link size={mobile ? 'small' : 'large'} name='twitter square' />
                    </a>
                    <a href='https://www.facebook.com/northwesternmutual' target='_blank'>
                      <Icon link size={mobile ? 'small' : 'large'} name='facebook square' />
                    </a>
                    <a href='https://www.instagram.com/northwesternmutual/' target='_blank'>
                      <Icon link size={mobile ? 'small' : 'large'} name='send' />
                    </a>
                    <a href='https://www.linkedin.com/company/northwestern-mutual' target='_blank'>
                      <Icon link size={mobile ? 'small' : 'large'} name='linkedin' />
                    </a>
                  </div>
                </Card.Content>
              </Card>
            ))
          }
        </Card.Group>
      </div>
    );
  }
};

const TAGS_QUERY = gql`
  query TagQuery($eventName: String!) {
    allEvents(filter: {
    s3Folder: $eventName
    }) {
      tags
    }
  }
`;
const tags = graphql(TAGS_QUERY, {
  options: (ownProps) => ({ variables: { eventName: ownProps.match.params.id } }),
  props: ({ data: { loading, allEvents, error } }) => ({
    loading,
    error,
    allEvents,
  }),
});

export default tags(ImageCardGroup);
