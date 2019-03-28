import React from 'react'
import { connect } from 'react-redux'
import BossesListViewItem from '../BossesListViewItem/BossesListViewItem';
import CardColumns from 'react-bootstrap/CardColumns';

const BossesListView = (props) => {
    return (
        <CardColumns style={{margin: '0 auto'}}>
            { props.bossList.map(b => <BossesListViewItem key={ b.id } boss={ b } /> ) }
        </CardColumns>
    )
}

const mapStateToProps = ({ bosses }) => {
    return {
        bossList: bosses.bossList
    }
};

export default connect(mapStateToProps)(BossesListView);