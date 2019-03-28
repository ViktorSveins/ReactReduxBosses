import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { getBoss, deleteBoss } from '../../actions/bossActions';
import Container from 'react-bootstrap/Container';
import EditBoss from '../EditBoss/EditBoss';

class BossDetails extends Component {
    componentDidMount() {
        this.props.getBoss(this.props.match.params.id);
    }

    constructor(props) {
        super(props);
    }

    delete() {
        const { boss, deleteBoss } = this.props;
        deleteBoss(boss.id);
        this.props.history.push('/bosses');
    }

    render() {
        const { boss } = this.props;
        return (
            <Container>
                <Card style={{ width: '40rem', margin: '0 auto' }} >
                    <div style={{ textAlign: 'center'}}>
                        <Card.Img variant="top" src={ boss.img } style={{ width: '18rem' }} />
                    </div>
                    <Card.Body>
                    <Card.Title>{ boss.name }</Card.Title>
                    <Card.Text>{ boss.description }</Card.Text>
                    <Button variant="danger" style={{float: 'left'}} onClick={() => this.delete()}>Delete</Button>
                    <EditBoss />
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

const mapStateToProps = ({ bosses }) => {
    return {
        boss: bosses.bossDetails
    }
};

export default connect(mapStateToProps, { getBoss, deleteBoss })(BossDetails)
