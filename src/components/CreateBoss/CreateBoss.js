import React from 'react';
import { connect } from 'react-redux';
import { addBoss } from '../../actions/bossActions';
import validator from 'validator';
import Form from '../Form/Form';
import Input from '../Input/Input';
import Area from '../Area/Area'
import toastr from 'toastr';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import isImageUrl from 'is-image-url';

const initialState = {
    show: false,
    fields: {
        name: '',
        description: '',
        img: ''
    },
    errors: {
        nameError: '',
        descriptionError: '',
        imgError: ''
    }
}

class CreateBoss extends React.Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = initialState;
    };

    validateForm() {
        const { name, description, img } = this.state.fields;
        const errors = {};
        if (name === '') { errors.nameError = 'Name is required'; }
        if (description === '') { errors.descriptionError = 'Description is required'; }
        if (img === '') { errors.imgError = 'Image is required'; }
        if (!isImageUrl(img)) { errors.imgError = 'Not an image URL'; }
        if (!validator.isURL(img)) { errors.imgError = 'Invalid URL'; }
        if (Object.keys(errors).length > 0) {
            this.setState({ ...this.state.errors, errors });
            return false;
        }

        return true;
    };

    submitForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            this.props.addBoss(this.state.fields);
            this.handleClose();
        } else {
            toastr.error('Boss could not be created!', 'Failed!');
        }
    }

    onInput(e) {
        this.setState({
            fields: {
                ...this.state.fields,
                [e.target.name]: e.target.value
            }
        });
    };

    handleClose() {
        this.setState(initialState);
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        const { name, description, img } = this.state.fields;
        const { nameError, descriptionError, imgError } = this.state.errors;
        return (
            <>
                <Button variant="success" onClick={this.handleShow} style={{marginBottom: '20px'}}>
                    Create new boss!
                </Button>
                
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create new boss!</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={e => this.submitForm(e)} >
                        <Modal.Body>
                            <Input
                                type="text"
                                name="name"
                                value={name}
                                htmlId="name"
                                label="Name:"
                                errorMessage={nameError}
                                onInput={e => this.onInput(e)} />
                            <Area
                                type="text"
                                name="description"
                                value={description}
                                htmlId="description"
                                label="Description:"
                                errorMessage={descriptionError}
                                onInput={e => this.onInput(e)} />
                            <Input
                                type="text"
                                name="img"
                                value={img}
                                htmlId="img"
                                label="Image URL:"
                                errorMessage={imgError}
                                onInput={e => this.onInput(e)} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" type="submit">
                                Create!
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
        )
    }
}

export default connect(null, { addBoss })(CreateBoss);