import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ContactFormModal = ({ show, handleClose, handleSubmit, contact }) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        if (contact) setFormData(contact);
        else setFormData({ id: '', name: '', email: '', phone: '' });
    }, [contact]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = () => {
        handleSubmit(formData);
        setFormData({ id: '', name: '', email: '', phone: '' });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{contact ? 'Update Contact' : 'Add Contact'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={onSubmit}>
                    {contact ? 'Update' : 'Add'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ContactFormModal;
