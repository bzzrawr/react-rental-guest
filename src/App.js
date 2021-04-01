import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookingMenu from './layout/BookingMenu'
import Bookings from './pages/Bookings'
import Account from './pages/Account'
import TopNav from './layout/TopNav'
import Menu from './layout/Menu'
import './App.css';



function App() {
  return (
    <Router>
      
      <div className="App">    
        <Switch>
          <Route path ='/' exact component={HomePage}/>
          <Route path ='/Bookings' component={Bookings}/>
          <Route path ='/Account' component={Account}/>  
        </Switch>
        </div>
    </Router>

    
  );
}

export default App;
