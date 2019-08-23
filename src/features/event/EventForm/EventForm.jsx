import React, { Component } from 'react'
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {Field , reduxForm} from 'redux-form';
import {composeValidators , 
        combineValidators ,   
        isRequired ,  
        hasLengthGreaterThan
        } from 'revalidate';
import {createEvent , updateEvent } from '../eventActions';
import cuid from 'cuid';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';

const validate = combineValidators({
  title : isRequired({message : 'The Event title is required'}),
  category : isRequired({message : 'The Category is Required'}),
  description : composeValidators(
    isRequired({message : 'Please Enter a Description'}),
    hasLengthGreaterThan(4)({message : 'Description must atleast be 5 charachter.'})
  )(),
  city : isRequired('city'),
  venue : isRequired('venue'),
  date : isRequired('date')
})

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];

class EventForm extends Component {
  
  onFormSubmit = values =>
  {
    if(this.props.initialValues.id){
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);  
    }
    else{
    let newEvent = {
      ...values
     , id : cuid(),
     hostPhotoURL : "/assets/user.png",
     hostedBy : 'Bob'
    }
    this.props.createEvent(newEvent);
    this.props.history.push(`/events/${newEvent.id}`);  
  }
  }



  render() {
    const {history , initialValues , invalid , submitting , pristine} = this.props;
        return (
                <Grid>
                  <Grid.Column width ={10}>
                  <Segment>
                    <Header sub color= 'teal' content = 'Event Detail'/>
                    <Form onSubmit = {this.props.handleSubmit(this.onFormSubmit)} autoComplete = 'off'>
                      <Field name = 'title' component  = {TextInput} placeholder = 'Give your event a Name' />
                      <Field name = 'category' options = {category} component  = {SelectInput}  placeholder = 'What is the event about ' />
                      <Field name = 'description' rows = {3} component  = {TextArea} placeholder = 'Tell us about your event' />
                      <Header sub color= 'teal' content = 'Event Location Details'/>
                      <Field name = 'city' component  = {TextInput} placeholder = 'Enter City' />
                      <Field name = 'venue' component  = {TextInput} placeholder = 'Enter Venue' />
                      <Field name = 'date' 
                      showTimeSelect
                      dateFormat = 'ddd LLL yyyy h:mm a'
                      timeFormat = 'HH:mm'
                      component  = {DateInput} 
                      placeholder = 'Enter Date'
                      />
                      <Button disabled = {invalid || submitting || pristine} positive type="submit">
                        Submit
                      </Button>
                      <Button onClick = {
                        initialValues.id
                        ? () => history.push(`/events/${initialValues.id}`)
                        : () => history.push(`/events/`)
                      } 
                      type="button">Cancel</Button>
                    </Form>
                  </Segment>
                  </Grid.Column>
                </Grid>
                  
        )
    }
}

const mapStateToProps = (state , OwnProps) =>{
  const eventId = OwnProps.match.params.id;

  let event = {}

  if (eventId && state.events.length > 0){
    event = state.events.filter(event => event.id === eventId)[0]
  }

  return {
    initialValues : event
    //initialValues works like it gies default value to the form when it is name InitialValues
  }
}

const dispatchStateToProps = {
  createEvent : createEvent,
  updateEvent : updateEvent
}

export default connect(mapStateToProps , dispatchStateToProps)(reduxForm({form : 'eventForm' , validate})(EventForm));