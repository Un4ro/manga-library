import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import { createPosts } from '../../http/itemsAPI';

const CreatePost = observer(({show, onHide}) => {
    const {user} = useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addPost = () => {
        const formData = new FormData()
        formData.append('title', name)
        formData.append('description', description)
        formData.append('img', file)
        formData.append('userId', user.user.id)
        createPosts(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить произведение
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название поста"
                    />
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Введите содержание"
                        as="textarea"
                        rows={3}
                    />
                    <Form.Label>Изображение поста</Form.Label>
                    <Form.Control
                        className="mt-1"
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addPost} >Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreatePost;
