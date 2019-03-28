import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const BossesListViewItem = (props) => {
    const { boss } = props;
    return (
        <Link to={`bosses/${boss.id}`}>
            <Card style={{ width: '16rem' }} className='boss-card'>
                <div style={{textAlign: 'center'}}>
                    <Card.Img variant="top" src={ boss.img } style={{ width: '14rem' }}/>
                </div>
                <Card.Body>
                    <Card.Title>{ boss.name }</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default BossesListViewItem
