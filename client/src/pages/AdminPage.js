import React, {useState} from "react"
import CreateDevice from './modal/CreateDevice'
import {Button, Col, Row} from 'react-bootstrap'
import CreateType from "./modal/CreateType"
import CreateAuthor from "./modal/CreateAuthor"
import CreateGenre from "./modal/CreateGenre"
import CreatePost from "./modal/CreatePost"

export const AdminPage = () => {
    const [createAVisibible, setCreateAVisible] = useState(false)
    const [createSVisibible, setCreateSVisible] = useState(false)
    const [createTVisibible, setCreateTVisible] = useState(false)
    const [createGVisibible, setCreateGVisible] = useState(false)
    const [createPVisibible, setCreatePVisible] = useState(false)
    return (
        <div className="container">
            <h1 className="">Панель администратора</h1>
            <Col>
                <Row className="mb-1 p-1">
                    <Button variant="dark" onClick={() => setCreateSVisible(true)}>Создать мангу</Button>
                </Row>
                <Row className="mb-1 p-1">
                    <Button variant="dark" onClick={() => setCreateTVisible(true)}>Создать тип</Button>
                </Row>
                <Row className="mb-1 p-1">
                    <Button variant="dark" onClick={() => setCreateAVisible(true)}>Создать автора</Button>
                </Row>
                <Row className="mb-1 p-1">
                    <Button variant="dark" onClick={() => setCreateGVisible(true)}>Создать жанр</Button>
                </Row>
                <Row className="mb-1 p-1">
                    <Button variant="dark" onClick={() => setCreatePVisible(true)}>Создать пост</Button>
                </Row>
            </Col>
            <CreateDevice onHide={() => setCreateSVisible(false)} show={createSVisibible}/>
            <CreateType onHide={() => setCreateTVisible(false)} show={createTVisibible}/>
            <CreateAuthor onHide={() => setCreateAVisible(false)} show={createAVisibible}/>
            <CreateGenre onHide={() => setCreateGVisible(false)} show={createGVisibible} />
            <CreatePost onHide={() => setCreatePVisible(false)} show={createPVisibible}/>
        </div>
    )
}