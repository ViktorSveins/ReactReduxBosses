import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Welcome from './Welcome/Welcome';
import Bosses from './Bosses/Bosses';
import BossDetails from './BossDetails/BossDetails';

class App extends React.Component {

    render() {
        return(
            <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={ Welcome } />
                <Route exact path="/bosses" component={ Bosses } />
                <Route exact path="/bosses/:id" component={ BossDetails } />
                <Route exact path="*" render={() => <div>404 not found!</div>}/>
            </Switch>
            </>
        );
    };
};

export default App;