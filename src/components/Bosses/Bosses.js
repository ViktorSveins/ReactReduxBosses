import React from 'react';
import { getBosses } from '../../actions/bossActions';
import { connect } from 'react-redux'
import BossesListView from '../BossesListView/BossesListView';
import CreateBoss from '../CreateBoss/CreateBoss';
import Container from 'react-bootstrap/Container';

class Bosses extends React.Component {
    render() {
        this.props.getBosses();
        return (
            <Container style={{margin: '20px auto'}}>
                <CreateBoss/>
                <BossesListView />
            </Container>
        )
    }
}

export default connect(null, { getBosses })(Bosses);
