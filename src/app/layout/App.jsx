import React , {Component , Fragment} from 'react';
import {Container} from "semantic-ui-react";
import {Route} from 'react-router-dom';

import NavBar from "../../features/nav/NavBar/NavBar";
import HomePage from "../../features/home/HomePage";
import EventsDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from '../../features/event/EventForm/EventForm';

class App extends Component {
  render(){
  return (
    <Fragment>
      <Route exact path='/' component={HomePage} />
      <Route path="/(.+)" 
            render = {() => (
        <Fragment>
        <NavBar />
          <Container className="main">
            <Route path='/events' component={EventDashboard} />
            <Route path='/events/:id' component={EventsDetailedPage} />
            <Route path='/people' component={PeopleDashboard} />
            <Route path='/people/:id' component={EventDashboard} />
            <Route path='/settings' component={SettingsDashboard} />
            <Route path='/createEvent' component={EventForm} />
            </Container>
        </Fragment>
            )}/>
    </Fragment>
      
  );
  }
}

export default App;

