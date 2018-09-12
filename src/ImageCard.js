import React from 'react';
import axios from 'axios';
import { Card, Icon, Image, Loader, Header, Modal, Form } from 'semantic-ui-react';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import API_URL from './config/api';

const shareText = "Check out this picture";

class ImageCardGroup extends React.Component {

  state = {
    content: [],
    open: false,
    number: undefined,
    url: undefined
  };

  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

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

  setLink = url => this.setState({ url: url });

  faceBookOnClick = (url, hashTag) => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url + '&hashtag=%23' + hashTag, 'facebook-popup', 'height=350,width=600');
  };

  twitterOnClick = (url, hashTag) => {
    window.open('https://twitter.com/intent/tweet?text=' + shareText + ' ' + url + '&hashtags=' + hashTag, 'twitter-popup', 'height=350,width=600');
  };

  googleOnClick = url => {
    window.open('https://plus.google.com/share?url=' + url, 'google-plus-popup', 'height=350,width=600');

  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    debugger
    const url = `${API_URL}/send`;
    const numberPattern = /\d+/g;

    const phoneNumber = this.state.number.match(numberPattern).join('');
    const data = {
      "number": '+1' + phoneNumber,
      "url": this.state.url,
    };
    axios.post(url, data)
      .then(() => {
        this.setState({ number: undefined, url: undefined });
        this.close();
      })
      .catch(err => console.error(err));
  };

  render() {

    const { mobile, loading, allEvents } = this.props;
    if (loading) {
      return (
        <Loader active inline='centered' />
      )
    }

    let tags = [];
    let tagHTML = '';
    if (allEvents[0] && allEvents[0].tags) {
      tags = allEvents[0].tags.split(',');
      tags.forEach(tag => {
        tagHTML += '#' + tag.trim() + ' ';
      });
    }
    return (
      <div style={{
        margin: '0 auto',
        padding: mobile ? '25px 50px' : '50px 100px',
        minHeight: mobile ? '600px' : '1000px'
      }}>
        <Card.Group itemsPerRow={mobile ? 2 : 4}>
          {
            this.state.content.map(url => (
              <Card key={Math.random()}>
                <a href={url}><Image src={url} /></a>
                <Card.Content extra style={{
                  padding: mobile ? '0.5em 0.8em' : ''
                }} description>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{
                      fontSize: mobile ? '0.8em' : '1em',
                    }}>
                      {
                        tagHTML
                      }
                    </p>
                  </div>
                </Card.Content>
                <Card.Content>
                  <div>
                    <a
                      onClick={() => this.twitterOnClick(url, tags)}>
                      <Icon link size={mobile ? 'large' : 'big'} name='twitter' style={{ color: '#1DA1F2' }} />
                    </a>
                    <a
                      onClick={() => this.faceBookOnClick(url, tags[0])}>
                      <Icon link size={mobile ? 'large' : 'big'} name='facebook' style={{ color: '#3b5998' }} />
                    </a>
                    <a
                      onClick={() => this.googleOnClick(url)}>
                      <Icon link size={mobile ? 'large' : 'big'} name='google plus' style={{ color: '#DB4437' }} />
                    </a>
                    <a href={url} download>
                      <Icon link size={mobile ? 'large' : 'big'} name='cloud download' color='teal' />
                    </a>
                    <a onClick={() => { this.show(); this.setLink(url); }}>
                      <Icon link size={mobile ? 'large' : 'big'} name='discussions ' color='green' />
                    </a>
                  </div>
                </Card.Content>
              </Card>
            ))
          }
        </Card.Group>
        <Modal
          open={this.state.open}
          onClose={this.close}
          basic

        >
          <Header icon='phone' content='Send via Text Message' />
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Input value={'USA: +1'} width={mobile ? null : 2} readOnly />
                <Form.Input required={true} placeholder='xxxxxxxxx' name='number' value={this.state.number} onChange={this.handleChange} />
                <Form.Button positive content='Submit' style={{ float: 'right', 'marginBottom': '10px' }} />
              </Form.Group>
            </Form>
          </Modal.Content>
        </Modal>
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
