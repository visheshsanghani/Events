import React, { Component } from 'react';
import { Segment , List , Item , Button , Icon } from "semantic-ui-react";
import EventListAttendee from './EventListAttendee';

class EventListItem extends Component {
    render() {
        return (
            <div>
                     <Segment.Group>
                        <Segment>
                          <Item.Group>
                            <Item>
                              <Item.Image size="tiny" circular src={this.props.event.hostPhotoURL} />
                              <Item.Content>
                                <Item.Header as="a">{this.props.event.title}</Item.Header>
                                <Item.Description>
                                  Hosted by <a>{this.props.event.hostedBy}</a>
                                </Item.Description>
                              </Item.Content>
                            </Item>
                          </Item.Group>
                        </Segment>
                        <Segment>
                          <span>
                            <Icon name="clock" /> {this.props.event.date} |
                            <Icon name="marker" /> {this.props.event.venue}
                          </span>
                        </Segment>
                        <Segment secondary>
                          <List horizontal>
                          {this.props.event.attendees && this.props.event.attendees.map(attendee =>(
                            <EventListAttendee attendee = {attendee} key={attendee.id}  />
                          ))}
                          </List>
                        </Segment>
                        <Segment clearing>
                          <span>{this.props.event.description}</span>
                          <Button as="a" color="teal" floated="right" content="View" />
                        </Segment>
                      </Segment.Group>
            </div>
        )
    }
}

export default  EventListItem;