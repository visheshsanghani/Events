import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {
  state ={
    title : '',
    date :'',
    city:'',
    venue : '',
    hostedBy: ''
  };  
  
  handleFormSubmit = (evt) =>
  {
    evt.preventDefault();
    this.props.createEvent(this.state);
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
                      <Button onClick = {this.props.cancelFormOpen} type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}

export default EventForm;