import React from 'react';
import axios from 'axios';
import StackGrid, {transitions} from 'react-stack-grid';
import { Image, Dropdown, Grid } from 'semantic-ui-react'
import gql from "graphql-tag";
import {graphql} from "react-apollo/index";
import API_URL from './config/api';

class Display extends React.Component {
  state = {
    event: undefined,
    images: [],
    events: [],
  };

  componentDidMount() {
    const events = this.props.data.allEvents;
    if (events) {
      this.setState({ events: this.setEventState(events)});
    }
    this.intervalId = setInterval(() => this.loadData(), 120000); //2m
    this.loadData();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  componentDidUpdate(prevProps) {
    const events = this.props.data.allEvents;
    if (prevProps.data.allEvents !== events && events && events.length > 0) {
      this.setState({ events: this.setEventState(events)});
    }
  }

  setEventState = events => (
    events.map(event => (
      {
        key:event.s3Folder,
        value: event.s3Folder,
        text: event.name,
      }
    ))
  );


  loadData = () => {
    if (this.state.event) {
      const url =`${API_URL}/list/folder/first/${this.state.event}`;
      console.log(url)
      axios.get(url)
        .then(response => {
          this.setState({ images: response.data.filter(d => d.indexOf('.gif') > -1) });
        })
        .catch(error => {
          console.log(error);
        })
    }
  };

  handleChange = (event, data) => {
    this.setState({ event: data.value }, () => this.loadData())
  };

  render() {
    if (!this.state.event) {
      return (
        <div style={{
          margin: '0 auto',
          padding: this.props.mobile ? '25px 50px' : '50px 100px'
        }}>
        <Dropdown
          placeholder='Select Current Event To Display'
          options={this.state.events}
          onChange={this.handleChange}
        />
        </div>
      )
    }
    return (
      <div style={{
        margin: '0 auto',
        padding: this.props.mobile ? '25px 50px' : '50px 100px'
      }}>
        <Grid>
          <Grid.Row columns={3}>
            {
              this.state.images.slice(0, 3).map(link => (
                <Grid.Column>
                  <Image src={link} />
                </Grid.Column>
              ))
            }
            </Grid.Row>
          <Grid.Row columns={4}>
            {
              this.state.images.slice(3, 7).map(link => (
                <Grid.Column>
                  <Image src={link} />
                </Grid.Column>
              ))
            }
          </Grid.Row>
        </Grid>
      </div>
    );
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


export default graphql(ALL_EVENTS)(Display)

