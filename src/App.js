import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Bookings from './pages/Bookings'
import Account from './pages/Account'
import './App.css'



function App() {
  return (
    <Router>
      <div className="App">    
        <Switch>
          <Route path ='/' exact component={LoginPage}/>
          <Route path ='/Bookings' component={Bookings}/>
          <Route path ='/Account' component={Account}/>  
        </Switch>
        </div>
    </Router>

    
  );
}

export default App;
