import React, { Component } from 'react';
import {Grid } from 'semantic-ui-react';
import {connect} from 'react-redux';

import EventList from "../EventList/EventList";
import {createEvent , updateEvent , deleteEvent } from '../eventActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';

class EventDashboard extends Component {

  handleDeleteEvent = (id) =>{
    this.props.deleteEvent(id);
  }

    render() {
      if(this.props.loading){
        return <LoadingComponent inverted = {false} />
      }
        return (
            <Grid>
                <Grid.Column width={10}>
                    <h2>
                       <EventList
                        events = {this.props.events} 
                        deleteEvent = {this.handleDeleteEvent} />
                    </h2>
                </Grid.Column>
                <Grid.Column width={6}>
                  <h2>Activity Field</h2>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = (state) =>({
  events : state.events,
  loading : state.async.loading
})

const dispatchStateToProps = {
  createEvent : createEvent,
  updateEvent : updateEvent,
  deleteEvent : deleteEvent
}

export default connect(mapStateToProps,dispatchStateToProps)(EventDashboard);