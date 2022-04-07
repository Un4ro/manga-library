import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react"
import { Carousel, Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import { PostsList } from "../components/PostsList";
import { fetchGeneres, fetchItems, fetchPosts } from "../http/itemsAPI";
import { STUFF_ROUTE } from "../utils/consts";

export const MainPage = observer(() => {
    const [value, setValue] = useState([]);
    const handleChange = (val) => setValue(val);
    const {stuffs} = useContext(Context);

    useEffect(() => {
        fetchGeneres().then(data => stuffs.setGenre(data))
        fetchItems(null, null, 1, 5).then(data => {
            stuffs.setIsStuffs(data.rows)
        })
        fetchPosts().then(data => {
            stuffs.setPosts(data.rows)
        })
    }, [])
    
    const navigate = useNavigate()

    const [file, setFile] = useState(null)

    const selectFile = e => {
        setFile(e.target.files)
    }
        
    useEffect(() => {
        
    }, [file])
    return (
        <div className="container">
            <Row>
                <Col className="p-5" md={8}>
                    <h2>Главная страница</h2>
                    
                    <PostsList />
                   
                </Col>
                <Col md={4} className="d-flex flex-column align-items-center">
                    <h2 className="mb-3 mt-5">Популярно сегодня</h2>
                    <div className="mt-3">
                        <div>
                        <Carousel style={{borderRadius: '5px', overflow: 'hidden', width: '230px', height: '500px'}}>
                            {stuffs.IsStuffs.map(item => {
                            return <Carousel.Item interval={1000} key={item.id} onClick={() => navigate(STUFF_ROUTE + '/' + item.id, {replace: true})}>
                                    <img
                                    // width={160}
                                    // height={450}
                                    className="d-block w-100"
                                    src={process.env.REACT_APP_API_URL + item.img}
                                    alt={item.id}
                                    style={{objectFit: 'cover', width: '100%', height: '400px'}}
                                    />
                                    <Carousel.Caption>
                                    <h4>{item.name}</h4>
                                    <p>{item.description.slice(0,35) + '...'}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            })}
                        </Carousel>
                        </div>
                    </div>
                    {/* <ToggleButtonGroup style={{gap:'5px'}} className="d-inline-flex flex-column bd-highlight" type="checkbox" value={value} onChange={handleChange}>
                        {stuffs.genre.map(item => {
                            return <ToggleButton key={item.id} variant="outline-info" id={`tbg-btn-${item.id}`} value={item.id}>
                                        {item.name}
                                </ToggleButton>
                        })}
                    </ToggleButtonGroup> */}
                </Col>
            </Row>
        </div>
       
    )
})