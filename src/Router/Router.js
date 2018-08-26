import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Signup from '../Signup/Signup'
import Husky from '../Husky/Husky'
import Labrador from '../Labrador/Labrador'
import Hound from '../Hound/Hound'
import Pug from '../Pug/Pug'

const Router = () => (
    <main>
        <Switch>
            <Route path="/" exact={true} component={Signup} />
            <Route path="/feed" component={Husky} />
            <Route path="/labrador" component={Labrador} />
            <Route path="/Hound" component={Hound} />
            <Route path="/pug" component={Pug} />
      </Switch>
    </main>
)
  
export default Router