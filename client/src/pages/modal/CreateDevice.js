import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import { createStuff, fetchAuthors, fetchTypes } from '../../http/itemsAPI';

const CreateDevice = observer(({show, onHide}) => {
    const {stuffs} = useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => stuffs.setType(data))
        fetchAuthors().then(data => stuffs.setAuthor(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addStuff = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('img', file)
        formData.append('authorId', stuffs.selectedAuthor.id)
        formData.append('typeId', stuffs.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createStuff(formData).then(data => onHide())
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
                    <Row>
                        <Col>
                            <Dropdown className="mt-2 mb-2">
                                <Dropdown.Toggle variant={'dark'} style={{width: '100%'}}>{stuffs.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {stuffs.types.map(type =>
                                        <Dropdown.Item
                                            onClick={() => stuffs.setSelectedType(type)}
                                            key={type.id}
                                        >
                                            {type.name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Dropdown className="mt-2 mb-2">
                                <Dropdown.Toggle variant={'dark'} style={{width: '100%'}}>{stuffs.selectedAuthor.name || "Выберите автора"}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {stuffs.author.map(author =>
                                        <Dropdown.Item
                                            onClick={() => stuffs.setSelectedAuthor(author)}
                                            key={author.id}
                                        >
                                            {author.name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название произведения"
                    />
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Введите описание"
                        as="textarea"
                        rows={3}
                    />
                    <Form.Label>Изображение произведения</Form.Label>
                    <Form.Control
                        className="mt-1"
                        type="file"
                        onChange={selectFile}
                    />
                   
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={8}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addStuff} >Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;
