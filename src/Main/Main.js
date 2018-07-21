import React from 'react'; 
import { Switch, Route } from 'react-router-dom' 
import LogIn from '../LogIn/LogIn'
import Home from '../Home/Home';

const main = () => (
    <main>
      <Switch>
        <Route exact path='/' render={ () => (<LogIn name="Test"> Childern... </LogIn>) }/>
        <Route exact path='/home' render={ () => (<Home name="Grid Demo"> Childern... </Home>) }/>
       
      </Switch>
      
    </main>
  )
export default main;