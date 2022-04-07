import React, {useState, useEffect, useContext} from "react"
import { Tabs, Tab, Button, Image, Col, Row, Badge, Alert } from "react-bootstrap"
import {useParams} from 'react-router-dom'
import { Context } from "../index";
import { fetchOneItem } from "../http/itemsAPI";
const ItemPage = () => {
    const {user} = useContext(Context);
    const [key, setKey] = useState('home');
    const [isActive, setIsActive] = useState(false);

    const [item, setItem] = useState({info: []});
    const {id} = useParams()
    useEffect(() => {   
        fetchOneItem(id).then(data => setItem(data))
    }, [])

    let chapter = null
    if (item.chapters) {
        chapter = item.chapters[0]
    }

    const info = JSON.stringify(item)
    const userInfo = JSON.stringify(user)

    function isAdmin(item) {
        if (user.user.permission === "ADMIN") {return item} else {return null}
    }
    return (
        <div className="">
            <div className="bg-light m-0 p-0">
                <h2 className="container">{item.name}<Badge className="m-1 p-2 mb-4" bg="secondary">New</Badge></h2>
            </div>
            <div className="d-flex container">
                
                    <div className="m-1">
                        <Image src={process.env.REACT_APP_API_URL + item.img} width={300}></Image>
                    </div>
                <div>
                    <Tabs
                    id="controlled-tab"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    >
                    <Tab eventKey="home" title="Главная">
                        <div className="d-flex align-items-stretch flex-row">
                            
                            <div className="p-1">
                                <div className="p-1">
                                    {(item.type) ?  <p className="mt-2"> <span>Тип: {item.type.name} </span> </p>: null}
                                    {(item.author) ? <p className="mt-2"> <span>Автор: {item.author.name} </span> </p>: null}
                                </div>
                                <div>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Главы">
                    
                    {(chapter) ?
                        chapter.body.map(item => {
                            return <Image width={300} src={process.env.REACT_APP_API_URL + item.src}></Image>
                        }) 
                    :
                    null}

                    </Tab>
                    <Tab eventKey="contact" title="Комментарии" disabled={!isActive}>
                        В следующем обновлении...
                    </Tab>
                    </Tabs>
                </div>
            </div>
            <div className="container">
                {isAdmin(<Alert className="mt-3 p-4" show={true} variant="warning"><Alert.Heading>Это сообщение видит только администратор</Alert.Heading><hr />{info}</Alert>)}
                {isAdmin(<Alert className="mt-3 p-4" show={true} variant="warning"><Alert.Heading>Это сообщение видит только администратор</Alert.Heading><hr />{userInfo}</Alert>)}
            </div>
        </div>
    )
}

export default ItemPage