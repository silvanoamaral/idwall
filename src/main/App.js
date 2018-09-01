import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Signup from '../Signup/Signup'
import Husky from '../Husky/Husky'
import Labrador from '../Labrador/Labrador'
import Hound from '../Hound/Hound'
import Pug from '../Pug/Pug'
import NotFound from '../NotFound/NotFound'

import '../styles/App.css'

const App = () => (
    <main>
        <Switch>
            <Route path="/" exact={true} component={Signup} />
            <Route path="/feed/" exact={true} component={Husky} />         
            <Route path="/feed/husky" component={Husky} />
            <Route path="/feed/husky?id=id" component={Labrador} />
            <Route path="/feed/labrador" component={Labrador} />
            <Route path="/feed/Hound" component={Hound} />
            <Route path="/feed/pug" component={Pug} />
            <Route path='*' component={NotFound}/>            
      </Switch>
    </main>
)

export default App