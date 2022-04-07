import React from "react"
import { Card, Col } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { STUFF_ROUTE } from "../utils/consts"

const CatalogItem = ({item}) => {
    const navigate = useNavigate()
    const width = 170
    return ( 
        <Col className="mt-1 text-white p-1" md={2} onClick={() => navigate(STUFF_ROUTE + '/' + item.id, {replace: true})}>
            <Card>
                <Card.Img style={{maxWidth: {width}, objectFit: 'cover'}} height={width*1.5} src={process.env.REACT_APP_API_URL + item.img}></Card.Img>
                    <Card.Footer className="text-black">{item.name}</Card.Footer>
            </Card>
        </Col>
    )

}

export default CatalogItem