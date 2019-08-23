import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {createEvent , updateEvent } from '../eventActions';
import cuid from 'cuid';

class EventForm extends Component {
  state = {...this.props.event};  

  componentDidMount(){
    this.setState({
      ...this.props.selectEvent
    })
  }
  
  handleFormSubmit = (evt) =>
  {
    evt.preventDefault();
    if(this.state.id){
      this.props.updateEvent(this.state);
      this.props.history.push(`/events/${this.state.id}`);  
    }
    else{
    let newEvent = {
      ...this.state
     , id : cuid(),
     hostPhotoURL : "/assets/user.png"
    }
    this.props.createEvent(newEvent);
    this.props.history.push(`/events/${newEvent.id}`);  
  }
  }

  handleInputChange = (evt) =>
  {
    this.setState ({
      [evt.target.name] : evt.target.value
    })
  }


  render() {
      const {title , date,city, venue , hostedBy} = this.state;
        return (
                  <Segment>
                    <Form onSubmit = {this.handleFormSubmit}>
                      <Form.Field>
                        <label>Event Title</label>
                        <input 
                        name = "title"
                        value = {title}
                        onChange = {this.handleInputChange}
                        placeholder="Event Title"
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Event Date</label>
                        <input 
                        name = "date"
                        value = {date}
                        type="date" 
                        onChange = {this.handleInputChange}
                        placeholder="Event Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>City</label>
                        <input 
                        name = "city"
                        value = {city}
                        onChange = {this.handleInputChange}
                        placeholder="City event is taking place" />
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input 
                        name = "venue"
                        value = {venue}
                        onChange = {this.handleInputChange}
                        placeholder="Enter the Venue of the event" />
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input 
                        name = "hostedBy"
                        value = {hostedBy}
                        onChange = {this.handleInputChange}              
                        placeholder="Enter the name of person hosting" />
                      </Form.Field>
                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button onClick = {this.props.history.goBack} type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}

const mapStateToProps = (state , OwnProps) =>{
  const eventId = OwnProps.match.params.id;

  let event = {
    title : '',
    date :'',
    city:'',
    venue : '',
    hostedBy: ''
  }

  if (eventId && state.events.length > 0){
    event = state.events.filter(event => event.id === eventId)[0]
  }

  return {
    event : event
  }
}

const dispatchStateToProps = {
  createEvent : createEvent,
  updateEvent : updateEvent
}

export default connect(mapStateToProps , dispatchStateToProps)(EventForm);